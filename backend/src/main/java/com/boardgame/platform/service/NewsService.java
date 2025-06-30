package com.boardgame.platform.service;

import com.boardgame.platform.entity.News;
import com.boardgame.platform.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class NewsService {
    private final NewsRepository newsRepository;

    public News createNews(News news) {
        return newsRepository.save(news);
    }

    public List<News> getAllNews() {
        return newsRepository.findAll();
    }

    public Optional<News> getNewsById(Long id) {
        return newsRepository.findById(id);
    }

    public News updateNews(Long id, News updatedNews) {
        updatedNews.setId(id);
        return newsRepository.save(updatedNews);
    }

    public void deleteNews(Long id) {
        newsRepository.deleteById(id);
    }
}