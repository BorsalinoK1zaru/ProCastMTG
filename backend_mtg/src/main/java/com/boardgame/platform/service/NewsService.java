package com.boardgame.platform.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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