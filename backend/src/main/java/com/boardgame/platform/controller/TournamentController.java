package com.boardgame.platform.controller;

import com.boardgame.platform.entity.Tournament;
import com.boardgame.platform.service.TournamentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tournaments")
@RequiredArgsConstructor
public class TournamentController {
    private final TournamentService tournamentService;

    @PostMapping
    public ResponseEntity<Tournament> createTournament(@RequestBody Tournament tournament) {
        return ResponseEntity.ok(tournamentService.createTournament(tournament));
    }

    @GetMapping
    public ResponseEntity<List<Tournament>> getAllTournaments() {
        return ResponseEntity.ok(tournamentService.getAllTournaments());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tournament> getTournamentById(@PathVariable Long id) {
        return tournamentService.getTournamentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tournament> updateTournament(
            @PathVariable Long id,
            @RequestBody Tournament tournament) {
        return ResponseEntity.ok(tournamentService.updateTournament(id, tournament));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTournament(@PathVariable Long id) {
        tournamentService.deleteTournament(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{tournamentId}/participants/{userId}")
    public ResponseEntity<Void> addParticipant(
            @PathVariable Long tournamentId,
            @PathVariable Long userId) {
        tournamentService.addParticipant(tournamentId, userId);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{tournamentId}/participants/{userId}")
    public ResponseEntity<Void> removeParticipant(
            @PathVariable Long tournamentId,
            @PathVariable Long userId) {
        tournamentService.removeParticipant(tournamentId, userId);
        return ResponseEntity.noContent().build();
    }
}