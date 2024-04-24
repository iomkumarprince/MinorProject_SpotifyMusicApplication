package com.example.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason = "Playlist with the same name already exists.")
public class PlaylistAlreadyExistsException extends Exception {
}
