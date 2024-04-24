package com.example.service;

import com.example.entity.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface UserService {
    User registerUser(User user);
    Optional<User> loginUser(User user);
}
