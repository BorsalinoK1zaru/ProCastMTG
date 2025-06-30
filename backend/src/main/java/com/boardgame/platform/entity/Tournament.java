package com.boardgame.platform.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Entity
@Table(name = "tournaments")
public class Tournament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "format_id")
    private Format format;

    private String city;

    @ManyToMany
    @JoinTable(
            name = "tournament_participants",
            joinColumns = @JoinColumn(name = "tournament_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    private List<User> participants;

    private LocalTime time;
    private LocalDateTime dateTime;

    @Enumerated(EnumType.STRING)
    private BracketType bracketType;

    public enum BracketType {
        RANDOM, UPPER_LOWER
    }
    // Геттеры, сеттеры, конструкторы
}