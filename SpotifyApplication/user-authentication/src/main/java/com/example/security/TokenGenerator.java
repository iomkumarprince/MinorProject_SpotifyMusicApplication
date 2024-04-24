package com.example.security;

import com.example.entity.User;

import java.util.Map;

public interface TokenGenerator {
    public Map<String,String> generateToken(User user);
}
