package com.example.repository;

import com.example.entity.Song;
import com.example.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
        User findByEmailId(String emailId);
        List<User> findByPlaylists(String playlistName);

}
