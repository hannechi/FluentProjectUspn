package com.wiki.services;

import com.wiki.entities.Item_wiki;
import com.wiki.entities.PasswordModif;
import com.wiki.entities.User;
import com.wiki.entities.Version_wiki;
import com.wiki.repository.UserRepository;
import com.wiki.repository.VersionWikiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        //return userRepository.findByTypeNot("admin");
        return userRepository.findAll();
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
    public User getUserbyid(Long id)
    {
        return userRepository.findById(id).orElse(null);
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

    public void deleteUser(Long id) {
        Optional<User> userbyid = userRepository.findById(id);
        if(userbyid.isPresent()==false)
        {
            throw new IllegalStateException("user dosent exist !");
        }
        else {
            userRepository.deleteById(id);
        }
    }

    public void updatepassword(Long id, PasswordModif passwordmodif) {
        User userbyid = userRepository.findById(id).orElse(null);
        if (userbyid.getPassword().equals(passwordmodif.getOldpassword()))
        {
            userbyid.setPassword(passwordmodif.getNewpassword());
            userRepository.save(userbyid);
        }
        else
        {
            throw new IllegalStateException("user dosent exist !");
        }

    }
}
