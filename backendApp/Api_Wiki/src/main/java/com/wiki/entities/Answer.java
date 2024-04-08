package com.wiki.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "answer")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "titre")
    private String titre;

    @Column(name = "contenu", columnDefinition="LONGTEXT")
    private String contenu;

    @Column(name = "anonymous")
    private String anonymous;

    @Column(name = "date_ajout")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateAjout;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user_answer;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_question")
    private Question questionAnswered;

    public Answer(Long id, String titre, String contenu, String anonymous, Date dateAjout, User user_answer, Question questionAnswered) {
        this.id = id;
        this.titre = titre;
        this.contenu = contenu;
        this.anonymous = anonymous;
        this.dateAjout = dateAjout;
        this.user_answer = user_answer;
        this.questionAnswered = questionAnswered;
    }

    public Answer(String titre, String contenu, String anonymous, Date dateAjout, User user_answer, Question questionAnswered) {
        this.titre = titre;
        this.contenu = contenu;
        this.anonymous = anonymous;
        this.dateAjout = dateAjout;
        this.user_answer = user_answer;
        this.questionAnswered = questionAnswered;
    }

    public Answer() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public String getAnonymous() {
        return anonymous;
    }

    public void setAnonymous(String anonymous) {
        this.anonymous = anonymous;
    }

    public Date getDateAjout() {
        return dateAjout;
    }

    public void setDateAjout(Date dateAjout) {
        this.dateAjout = dateAjout;
    }

    public User getUser_answer() {
        return user_answer;
    }

    public void setUser_answer(User user_answer) {
        this.user_answer = user_answer;
    }

    public Question getQuestionAnswered() {
        return questionAnswered;
    }

    public void setQuestionAnswered(Question questionAnswered) {
        this.questionAnswered = questionAnswered;
    }

}

