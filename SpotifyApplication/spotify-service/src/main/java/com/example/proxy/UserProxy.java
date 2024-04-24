package com.example.proxy;

import com.example.entity.User;
import com.example.entity.UserDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(name="user-service", url="http://localhost:8082")
public interface UserProxy {
    @PostMapping("/api/v1/register")
    public ResponseEntity<User> registerUser(UserDto userDto);
}
