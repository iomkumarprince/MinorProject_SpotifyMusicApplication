package com.example.service;

import com.example.entity.Playlist;
import com.example.entity.Song;
import com.example.entity.User;
import com.example.exception.*;

import java.util.List;

public interface UserService {
    User registerUser(User user) throws UserAlreadyExistException;
    public Song addSong(String emailId, Song song) throws UserDoesNotFoundException;
    public List<Song> deleteSongById(int songId);
    public List<Song> getAllSongs();

    public Playlist createPlaylist(String emailId, String playlistName) throws UserDoesNotFoundException, PlaylistAlreadyExistsException;
    public boolean deletePlaylist(String emailId,String playlistName) throws UserDoesNotFoundException;
    public Playlist renamePlaylist(String emailId, String oldPlaylistName, String newPlaylistName) throws UserDoesNotFoundException, PlaylistDoesNotFoundException, PlaylistAlreadyExistsException;


    public boolean playlistExistsWithName(User user, String playlistName);

    public Playlist addSongIntoPlaylist(String emailId, String playlistName, Song song) throws UserDoesNotFoundException, PlaylistDoesNotFoundException;
    public boolean deleteSongFromPlaylist(String emailId, String playlistName, Song song) throws UserDoesNotFoundException;
}
