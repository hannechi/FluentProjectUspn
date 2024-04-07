package com.wiki.repository;


import com.wiki.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository  extends JpaRepository<User, Long> {

    User findByUsernameAndPassword(String username, String password);

    List<User> findByTypeNot(String type);

    User findByUsername(String username);

    User findByEmail(String email);
}
