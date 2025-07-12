package com.boardgame.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Table(name = "user_format_key")
public class UserFormatKey implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private Long formatId;

    public UserFormatKey(Long userId, Long formatId) {
        this.userId = userId;
        this.formatId = formatId;
    }

    public UserFormatKey() {

    }


    // Геттеры, сеттеры, equals, hashCode
}
