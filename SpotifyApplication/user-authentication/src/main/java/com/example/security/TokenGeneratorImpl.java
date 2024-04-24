package com.example.security;

import com.example.entity.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
@Service
public class TokenGeneratorImpl implements TokenGenerator {
    public Map<String, String> generateToken(User user) {
        Map<String, String> result = new HashMap<>();
        Map<String, Object> tokenMap = new HashMap<>();
        tokenMap.put("emailId", user.getEmailId());
        tokenMap.put("role", user.getRole());
        tokenMap.put("name",user.getFirstName());
        String myToken = Jwts.builder()
                .setClaims(tokenMap)
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256,"jwtKey")
                .compact();
        result.put("email",user.getEmailId());
        result.put("role",user.getRole());
        result.put("name",user.getFirstName());
        result.put("token", myToken);
        result.put("message", "Login Successful");
        System.out.println("Token Map"+tokenMap);
        System.out.println("Result "+result);
        return result;
    }
}