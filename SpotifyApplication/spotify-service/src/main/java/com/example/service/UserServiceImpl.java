package com.example.service;

import com.example.entity.Playlist;
import com.example.entity.Song;
import com.example.entity.User;
import com.example.entity.UserDto;
import com.example.exception.PlaylistAlreadyExistsException;
import com.example.exception.PlaylistDoesNotFoundException;
import com.example.exception.UserDoesNotFoundException;
import com.example.proxy.UserProxy;
import com.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserProxy userProxy;
    public User registerUser(User user){
        Optional<User> registeredUser = userRepository.findById(user.getEmailId());
        ResponseEntity<?> user1 = userProxy.registerUser(new UserDto(user.getFirstName(),user.getLastName(),user.getEmailId(),user.getMobileNo(),user.getPassword(), user.getRole()));
        System.out.println(user1.getBody());
        if(registeredUser.isEmpty()){
            return userRepository.save(user);
        }else{
            return null;
        }
    }

    public Song addSong(String emailId, Song song) throws UserDoesNotFoundException {
        Optional<User> registeredUser = userRepository.findById(emailId);
        if(registeredUser.isPresent()){
            User registerUser =registeredUser.get();
            registerUser.getSongList().add(song);
            userRepository.save(registerUser);
            return song;
        }else {
            throw new UserDoesNotFoundException();
        }
    }

    public List<Song> deleteSongById(int songId){
        List<User> users = userRepository.findAll();
        for (User user : users) {
            List<Song> songs = user.getSongList();
            Iterator<Song> iterator = songs.iterator();
            while (iterator.hasNext()) {
                Song song = iterator.next();
                if (song.getSongId() == songId) {
                    iterator.remove();
                    userRepository.save(user);
                    break;
                }
            }
        }
       return getAllSongs();
    }

    public List<Song> getAllSongs(){
        List<Song> allSongs = new ArrayList<>();
        List<User> users = userRepository.findAll();
        for(User user : users){
            List<Song> userSongs = user.getSongList();
            for(Song song : userSongs){
                allSongs.add(song);
            }
        }
        return allSongs;
    }


    public Playlist createPlaylist(String emailId, String playlistName) throws UserDoesNotFoundException, PlaylistAlreadyExistsException {
        User user = userRepository.findByEmailId(emailId);
        if (user == null) {
            throw new UserDoesNotFoundException();
        }
        for (Playlist existingPlaylist : user.getPlaylists()) {
            if (existingPlaylist.getPlaylistName().equals(playlistName)) {
                throw new PlaylistAlreadyExistsException();
            }
        }
        Playlist newPlaylist = new Playlist();
        newPlaylist.setPlaylistId(UUID.randomUUID().toString());
        newPlaylist.setPlaylistName(playlistName);
        newPlaylist.setSongs(new ArrayList<>());
        List<Playlist> userPlaylists = user.getPlaylists();
        userPlaylists.add(newPlaylist);
        userRepository.save(user);
        return newPlaylist;
    }

    public boolean deletePlaylist(String emailId, String playlistName) throws UserDoesNotFoundException {
        User user = userRepository.findByEmailId(emailId);
        if (user == null) {
            throw new UserDoesNotFoundException();
        }

        Iterator<Playlist> iterator = user.getPlaylists().iterator();
        while (iterator.hasNext()) {
            Playlist existingPlaylist = iterator.next();
            if (existingPlaylist.getPlaylistName().equals(playlistName)) {
                iterator.remove();
                break;
            }
        }

        userRepository.save(user);
        return true;
    }

    public Playlist renamePlaylist(String emailId, String oldPlaylistName, String newPlaylistName)
            throws UserDoesNotFoundException, PlaylistDoesNotFoundException, PlaylistAlreadyExistsException {
        User user = userRepository.findByEmailId(emailId);
        if (user == null) {
            throw new UserDoesNotFoundException();
        }

        Playlist existingPlaylist = findPlaylistByName(user, oldPlaylistName);

        if (playlistExistsWithName(user, newPlaylistName)) {
            throw new PlaylistAlreadyExistsException();
        }

        existingPlaylist.setPlaylistName(newPlaylistName);
        userRepository.save(user);

        return existingPlaylist;
    }


    public Playlist findPlaylistByName(User user, String playlistName) throws PlaylistDoesNotFoundException {
        for (Playlist playlist : user.getPlaylists()) {
            if (playlist.getPlaylistName().equals(playlistName)) {
                return playlist;
            }
        }
        throw new PlaylistDoesNotFoundException();
    }

    public boolean playlistExistsWithName(User user, String playlistName) {
        for (Playlist playlist : user.getPlaylists()) {
            if (playlist.getPlaylistName().equals(playlistName)) {
                return true;
            }
        }
        return false;
    }


    public Playlist addSongIntoPlaylist(String emailId, String playlistName, Song song) throws UserDoesNotFoundException, PlaylistDoesNotFoundException {
        User user = userRepository.findByEmailId(emailId);
        if (user == null) {
            throw new UserDoesNotFoundException();
        }
        for (Playlist existingPlaylist : user.getPlaylists()) {
            if (existingPlaylist.getPlaylistName().equals(playlistName)) {
                existingPlaylist.getSongs().add(song);

                userRepository.save(user);
                return existingPlaylist;
            }
        }
        throw new PlaylistDoesNotFoundException();
    }

    public boolean deleteSongFromPlaylist(String emailId, String playlistName, Song song) throws UserDoesNotFoundException {
        User user = userRepository.findByEmailId(emailId);
        if (user == null) {
            throw new UserDoesNotFoundException();
        }

        for (Playlist existingPlaylist : user.getPlaylists()) {
            if (existingPlaylist.getPlaylistName().equals(playlistName)) {
                List<Song> songs = existingPlaylist.getSongs();
                songs.remove(song);
                break;
            }
        }
        userRepository.save(user);
        return true;

    }
}
