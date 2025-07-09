package com.boardgame.platform.service;

import com.boardgame.platform.entity.UserFormat;
import com.boardgame.platform.entity.UserFormatKey;
import com.boardgame.platform.repository.FormatRepository;
import com.boardgame.platform.repository.UserFormatRepository;
import com.boardgame.platform.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserFormatService {
    private final UserFormatRepository userFormatRepository;
    private final UserRepository userRepository;
    private final FormatRepository formatRepository;

    public UserFormat createUserFormat(UserFormat userFormat) {
        // Проверяем существование пользователя и формата
        if (!userRepository.existsById(userFormat.getUser().getId())) {
            throw new RuntimeException("User not found with id: " + userFormat.getUser().getId());
        }
        if (!formatRepository.existsById(userFormat.getFormat().getId())) {
            throw new RuntimeException("Format not found with id: " + userFormat.getFormat().getId());
        }
        return userFormatRepository.save(userFormat);
    }

    public List<UserFormat> getAllUserFormats() {
        return userFormatRepository.findAll();
    }

    public Optional<UserFormat> getUserFormat(Long userId, Long formatId) {
        UserFormatKey id = new UserFormatKey(userId, formatId);
        return userFormatRepository.findById(id);
    }

    public UserFormat updateUserFormat(Long userId, Long formatId, UserFormat userFormatDetails) {
        UserFormatKey id = new UserFormatKey(userId, formatId);
        UserFormat userFormat = userFormatRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("UserFormat not found"));

        userFormat.setPoints(userFormatDetails.getPoints());

        return userFormatRepository.save(userFormat);
    }

    public void deleteUserFormat(Long userId, Long formatId) {
        UserFormatKey id = new UserFormatKey(userId, formatId);
        userFormatRepository.deleteById(id);
    }
}