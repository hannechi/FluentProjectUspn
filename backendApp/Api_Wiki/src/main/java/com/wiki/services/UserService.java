package com.wiki.services;

import com.wiki.entities.Item_wiki;
import com.wiki.entities.User;
import com.wiki.entities.Version_wiki;
import com.wiki.repository.UserRepository;
import com.wiki.repository.VersionWikiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findByTypeNot("admin");
    }

    public User updateUserType(Long id, User user) {
        User userbyid = userRepository.findById(id).orElse(null);

        if (userbyid != null) {
            userbyid.setType(user.getType());
            return userRepository.save(userbyid);
        }
        return null;
    }
    public User getUserbyemail(String email)
    {
        return userRepository.findByEmail(email);
    }
    public User getUserbyusername(String username)
    {
        return userRepository.findByUsername(username);
    }

    public User signin (User user)
    {
        User authuser = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        return authuser;
    }

    public User signup (User user)
    {
        return userRepository.save(user);
    }
}
