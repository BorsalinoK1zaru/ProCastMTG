package com.boardgame.platform.controller;

import com.boardgame.platform.entity.Format;
import com.boardgame.platform.service.FormatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/formats")
@RequiredArgsConstructor
public class FormatController {
    private final FormatService formatService;

    @PostMapping
    public ResponseEntity<Format> createFormat(@RequestBody Format format) {
        return ResponseEntity.ok(formatService.createFormat(format));
    }

    @GetMapping
    public ResponseEntity<List<Format>> getAllFormats() {
        return ResponseEntity.ok(formatService.getAllFormats());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Format> getFormatById(@PathVariable Long id) {
        return formatService.getFormatById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Format> updateFormat(@PathVariable Long id, @RequestBody Format format) {
        return ResponseEntity.ok(formatService.updateFormat(id, format));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFormat(@PathVariable Long id) {
        formatService.deleteFormat(id);
        return ResponseEntity.noContent().build();
    }
}