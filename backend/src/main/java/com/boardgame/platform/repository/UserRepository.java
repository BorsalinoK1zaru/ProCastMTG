package com.boardgame.platform.repository;

import com.boardgame.platform.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User, Long> {
}
