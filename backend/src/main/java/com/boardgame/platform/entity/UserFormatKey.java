package com.boardgame.platform.entity;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class UserFormatKey implements Serializable {

    private Long userId;
    private Long formatId;

    // Конструктор без аргументов нужен для JPA
    public UserFormatKey() {}

    // Конструктор с аргументами для удобства создания объектов
    public UserFormatKey(Long userId, Long formatId) {
        this.userId = userId;
        this.formatId = formatId;
    }

    // Геттеры и сеттеры
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getFormatId() {
        return formatId;
    }

    public void setFormatId(Long formatId) {
        this.formatId = formatId;
    }

    // Методы equals и hashCode необходимы для составного ключа
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserFormatKey that = (UserFormatKey) o;
        return Objects.equals(userId, that.userId) && Objects.equals(formatId, that.formatId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, formatId);
    }
}
