package com.boardgame.platform.entity;

import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class UserFormatKey implements Serializable {
    private Long userId;
    private Long formatId;
    // Геттеры, сеттеры, equals, hashCode
}
