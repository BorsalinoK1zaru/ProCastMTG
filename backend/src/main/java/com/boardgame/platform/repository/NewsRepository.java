package com.boardgame.platform.repository;

import com.boardgame.platform.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News, Long> {}