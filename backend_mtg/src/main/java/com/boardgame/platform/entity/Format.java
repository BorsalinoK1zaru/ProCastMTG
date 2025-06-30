package com.boardgame.platform.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "formats")
public class Format {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    // Геттеры, сеттеры, конструкторы
}