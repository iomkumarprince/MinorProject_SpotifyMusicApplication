package com.example.service;

import com.example.entity.User;
import com.example.exception.UserDoesNotFoundException;
import com.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;

    public User registerUser(User user){
        Optional<User> registeredUser = userRepository.findById(user.getEmailId());
        if(registeredUser.isEmpty()){
            return userRepository.save(user);
        }else{
            return null;
        }
    }

    public Optional<User> loginUser(User user){
        Optional<User> loginUser = userRepository.findById(user.getEmailId());
        if(loginUser.isPresent()){
            if(loginUser.get().getEmailId().equals(user.getEmailId()) && loginUser.get().getPassword().equals(user.getPassword())){
                return loginUser;
            }
        }else {
            return null;
        }
        return null;
    }
}
