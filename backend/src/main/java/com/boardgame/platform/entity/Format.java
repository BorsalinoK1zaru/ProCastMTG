package com.boardgame.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "formats")
public class Format {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    // Геттеры, сеттеры, конструкторы
}