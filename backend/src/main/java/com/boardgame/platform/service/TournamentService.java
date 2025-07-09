package com.boardgame.platform.service;

import com.boardgame.platform.entity.Tournament;
import com.boardgame.platform.entity.User;
import com.boardgame.platform.repository.FormatRepository;
import com.boardgame.platform.repository.TournamentRepository;
import com.boardgame.platform.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TournamentService {
    private final TournamentRepository tournamentRepository;
    private final FormatRepository formatRepository;
    private final UserRepository userRepository;

    public Tournament createTournament(Tournament tournament) {
        // Проверяем существование формата
        if (!formatRepository.existsById(tournament.getFormat().getId())) {
            throw new RuntimeException("Format not found with id: " + tournament.getFormat().getId());
        }
        return tournamentRepository.save(tournament);
    }

    public List<Tournament> getAllTournaments() {
        return tournamentRepository.findAll();
    }

    public Optional<Tournament> getTournamentById(Long id) {
        return tournamentRepository.findById(id);
    }

    public Tournament updateTournament(Long id, Tournament tournamentDetails) {
        Tournament tournament = tournamentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tournament not found with id: " + id));

        tournament.setFormat(tournamentDetails.getFormat());
        tournament.setCity(tournamentDetails.getCity());
        tournament.setTime(tournamentDetails.getTime());
        tournament.setDateTime(tournamentDetails.getDateTime());
        tournament.setBracketType(tournamentDetails.getBracketType());

        return tournamentRepository.save(tournament);
    }

    public void deleteTournament(Long id) {
        tournamentRepository.deleteById(id);
    }

    public void addParticipant(Long tournamentId, Long userId) {
        Tournament tournament = tournamentRepository.findById(tournamentId)
                .orElseThrow(() -> new RuntimeException("Tournament not found with id: " + tournamentId));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

        tournament.getParticipants().add(user);
        tournamentRepository.save(tournament);
    }

    public void removeParticipant(Long tournamentId, Long userId) {
        Tournament tournament = tournamentRepository.findById(tournamentId)
                .orElseThrow(() -> new RuntimeException("Tournament not found with id: " + tournamentId));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

        tournament.getParticipants().remove(user);
        tournamentRepository.save(tournament);
    }
}