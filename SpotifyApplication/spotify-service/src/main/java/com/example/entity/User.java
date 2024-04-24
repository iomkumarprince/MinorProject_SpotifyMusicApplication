package com.example.entity;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
    String firstName;
    String lastName;
    @Id
    String emailId;
    String password;
    long mobileNo;
    String role;
    List<Song> songList;
    List<Playlist> playlists;
}
