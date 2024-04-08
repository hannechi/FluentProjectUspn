package com.wiki.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "email")
    private String email;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "type")
    private String type;

    @JsonIgnore
    @OneToMany(mappedBy = "user_question", cascade = CascadeType.ALL)
    private List<Question> mesquestions;

    @JsonIgnore
    @OneToMany(mappedBy = "user_answer", cascade = CascadeType.ALL)
    private List<Answer> mesreponses;




    public User() {
    }

    public User(String email, String username, String password, String type, List<Question> mesquestions, List<Answer> mesreponses) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.type = type;
        this.mesquestions = mesquestions;
        this.mesreponses = mesreponses;
    }

    public User(Long id, String email, String username, String password, String type, List<Question> mesquestions, List<Answer> mesreponses) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.type = type;
        this.mesquestions = mesquestions;
        this.mesreponses = mesreponses;
    }

    public User(Long id, String email, String username, String password, String type) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.password = password;
        this.type = type;
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User(String email, String username, String password, String type) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<Question> getMesquestions() {
        return mesquestions;
    }

    public void setMesquestions(List<Question> mesquestions) {
        this.mesquestions = mesquestions;
    }

    public List<Answer> getMesreponses() {
        return mesreponses;
    }

    public void setMesreponses(List<Answer> mesreponses) {
        this.mesreponses = mesreponses;
    }
}
