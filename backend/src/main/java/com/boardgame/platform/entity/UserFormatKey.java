package com.boardgame.platform.entity;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Embeddable
public class UserFormatKey implements Serializable {
    @Id
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
