package com.boardgame.platform.controller;

import com.boardgame.platform.entity.UserFormat;
import com.boardgame.platform.service.UserFormatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user-formats")
@RequiredArgsConstructor
public class UserFormatController {
    private final UserFormatService userFormatService;

    @PostMapping
    public ResponseEntity<UserFormat> createUserFormat(@RequestBody UserFormat userFormat) {
        return ResponseEntity.ok(userFormatService.createUserFormat(userFormat));
    }

    @GetMapping
    public ResponseEntity<List<UserFormat>> getAllUserFormats() {
        return ResponseEntity.ok(userFormatService.getAllUserFormats());
    }

    @GetMapping("/user/{userId}/format/{formatId}")
    public ResponseEntity<UserFormat> getUserFormat(
            @PathVariable Long userId,
            @PathVariable Long formatId) {
        return userFormatService.getUserFormat(userId, formatId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/user/{userId}/format/{formatId}")
    public ResponseEntity<UserFormat> updateUserFormat(
            @PathVariable Long userId,
            @PathVariable Long formatId,
            @RequestBody UserFormat userFormat) {
        return ResponseEntity.ok(userFormatService.updateUserFormat(userId, formatId, userFormat));
    }

    @DeleteMapping("/user/{userId}/format/{formatId}")
    public ResponseEntity<Void> deleteUserFormat(
            @PathVariable Long userId,
            @PathVariable Long formatId) {
        userFormatService.deleteUserFormat(userId, formatId);
        return ResponseEntity.noContent().build();
    }
}