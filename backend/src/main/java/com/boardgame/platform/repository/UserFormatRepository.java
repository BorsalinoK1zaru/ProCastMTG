package com.boardgame.platform.repository;

import com.boardgame.platform.entity.UserFormat;
import com.boardgame.platform.entity.UserFormatKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserFormatRepository extends JpaRepository<UserFormat, UserFormatKey> {
}
