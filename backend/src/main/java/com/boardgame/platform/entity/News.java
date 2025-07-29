package com.boardgame.platform.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "news")
public class News {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String img;
    private String title;
    private String subtitle;

    @Column(columnDefinition = "TEXT")
    private String content;

    private LocalDate datePublic;
}