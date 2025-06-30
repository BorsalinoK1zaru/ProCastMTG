package com.boardgame.platform.service;

import com.boardgame.platform.entity.Format;
import com.boardgame.platform.repository.FormatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FormatService {
    private final FormatRepository formatRepository;

    public Format createFormat(Format format) {
        return formatRepository.save(format);
    }

    public List<Format> getAllFormats() {
        return formatRepository.findAll();
    }

    public Optional<Format> getFormatById(Long id) {
        return formatRepository.findById(id);
    }

    public Format updateFormat(Long id, Format formatDetails) {
        Format format = formatRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Format not found with id: " + id));

        format.setName(formatDetails.getName());
        format.setDescription(formatDetails.getDescription());

        return formatRepository.save(format);
    }

    public void deleteFormat(Long id) {
        formatRepository.deleteById(id);
    }
}