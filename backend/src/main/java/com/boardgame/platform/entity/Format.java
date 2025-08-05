package com.boardgame.platform.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
@Table(name = "formats")
public class Format {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "format")
    private Set<UserFormat> userFormats;


    private String name;
    private String description;
    // Геттеры, сеттеры, конструкторы
}