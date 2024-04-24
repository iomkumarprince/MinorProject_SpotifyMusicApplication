package com.example.controller;

import com.example.entity.Playlist;
import com.example.entity.Song;
import com.example.entity.User;
import com.example.exception.*;
import com.example.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) throws UserAlreadyExistException {
        return new ResponseEntity<>(userService.registerUser(user), HttpStatus.CREATED);
    }

    @PostMapping("/addSong/{emailId}")
    public ResponseEntity<?> addSong(HttpServletRequest request, @PathVariable String emailId, @RequestBody Song song) {
        try {
            String role = (String) request.getAttribute("role");
            // Check if role is null before comparing
            if (role != null && role.equalsIgnoreCase("admin")) {
                userService.addSong(emailId, song);
                return new ResponseEntity<>("Song added successfully", HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Un-Authorized User", HttpStatus.UNAUTHORIZED);
            }
        } catch (UserDoesNotFoundException e) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteSongById/{songId}")
    public ResponseEntity<?> deleteSongById(@PathVariable int songId, HttpServletRequest httpServletRequest) throws SongDoesNotExistException {
        try {
            String role = (String) httpServletRequest.getAttribute("role");
            userService.deleteSongById(songId);
            return new ResponseEntity<>("Song deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to delete song", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getSongs")
    public ResponseEntity<List<Song>> getAllSongs(){
        List<Song> songs = userService.getAllSongs();
        return new ResponseEntity<>(songs,HttpStatus.OK);
    }

    @PostMapping("/createPlaylist/{emailId}/{playlistName}")
    public ResponseEntity<?> createPlaylist(@PathVariable String emailId, @PathVariable String playlistName) {
        try {
            Playlist newPlaylist = userService.createPlaylist(emailId,playlistName);
            return new ResponseEntity<>(newPlaylist, HttpStatus.CREATED);
        } catch (UserDoesNotFoundException e) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        } catch (PlaylistAlreadyExistsException e) {
            return new ResponseEntity<>("Playlist with the same name already exists.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deletePlaylist/{emailId}/{playlistName}")
    public ResponseEntity<?> deletePlaylist(@PathVariable String emailId, @PathVariable String playlistName) {
        try {
            boolean deleted = userService.deletePlaylist(emailId, playlistName);
            if (deleted) {
                return new ResponseEntity<>("Playlist deleted successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Playlist not found", HttpStatus.NOT_FOUND);
            }
        } catch (UserDoesNotFoundException e) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/renamePlaylist/{emailId}/{oldPlaylistName}/{newPlaylistName}")
    public ResponseEntity<?> renamePlaylist(
            @PathVariable String emailId,
            @PathVariable String oldPlaylistName,
            @PathVariable String newPlaylistName) {
        try {
            Playlist updatedPlaylist = userService.renamePlaylist(emailId, oldPlaylistName, newPlaylistName);
            return new ResponseEntity<>(updatedPlaylist, HttpStatus.OK);
        } catch (UserDoesNotFoundException e) {
            return new ResponseEntity<>("User does not found", HttpStatus.NOT_FOUND);
        } catch (PlaylistDoesNotFoundException e) {
            return new ResponseEntity<>("Playlist does not found", HttpStatus.NOT_FOUND);
        } catch (PlaylistAlreadyExistsException e) {
            return new ResponseEntity<>("Playlist with the new name already exists", HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/addSongToPlaylist/{emailId}/{playlistName}")
    public ResponseEntity<?> addSongToPlaylist(
            @PathVariable String emailId,
            @PathVariable String playlistName,
            @RequestBody Song song) {
        try {
            Playlist updatedPlaylist = userService.addSongIntoPlaylist(emailId, playlistName, song);
            return new ResponseEntity<>(updatedPlaylist, HttpStatus.OK);
        } catch (UserDoesNotFoundException e) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        } catch (PlaylistDoesNotFoundException e) {
            return new ResponseEntity<>("Playlist not found", HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteSongFromPlaylist/{emailId}/{playlistName}")
    public ResponseEntity<?> deleteSongFromPlaylist(
            @PathVariable String emailId,
            @PathVariable String playlistName,
            @RequestBody Song song) {
        try {
            boolean success = userService.deleteSongFromPlaylist(emailId, playlistName, song);
            if (success) {
                return new ResponseEntity<>("Song deleted from playlist successfully", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Song not found in the playlist", HttpStatus.NOT_FOUND);
            }
        } catch (UserDoesNotFoundException e) {
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }



}
