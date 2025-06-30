package com.boardgame.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Table(name = "user_format")
public class UserFormat {
    @EmbeddedId
    private UserFormatKey id;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @MapsId("formatId")
    @JoinColumn(name = "format_id")
    private Format format;

    private Integer points;
    // Геттеры, сеттеры, конструкторы
}

