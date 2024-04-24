package com.example.entity;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserDto {
    String firstName;
    String lastName;
    @Id
    String emailId;
    long mobileNo;
    String password;
    String role;
}
