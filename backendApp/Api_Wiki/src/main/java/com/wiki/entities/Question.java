package com.wiki.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;


@Entity
@Table(name = "question")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "titre")
    private String titre;

    @Column(name = "contenu", columnDefinition="LONGTEXT")
    private String contenu;

    @Column(name = "anonymous")
    private String anonymous;


    @Column(name = "keywords")
    private String keywords;


    @Column(name = "date_ajout")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateAjout;

    @OneToMany(mappedBy = "questionAnswered", cascade = CascadeType.ALL)
    private List<Answer> lesreponses;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user_question;

    public Question(String titre, String contenu, String anonymous, String keywords, Date dateAjout, User user_question) {
        this.titre = titre;
        this.contenu = contenu;
        this.anonymous = anonymous;
        this.keywords = keywords;
        this.dateAjout = dateAjout;
        this.user_question = user_question;
    }

    public Question(Long id, String titre, String contenu, String anonymous, String keywords, Date dateAjout, User user_question) {
        this.id = id;
        this.titre = titre;
        this.contenu = contenu;
        this.anonymous = anonymous;
        this.keywords = keywords;
        this.dateAjout = dateAjout;
        this.user_question = user_question;
    }



    public Question() {
    }

    public Question(String titre, String contenu, String anonymous, String keywords, Date dateAjout, User user_question, List<Answer> lesreponses) {
        this.titre = titre;
        this.contenu = contenu;
        this.anonymous = anonymous;
        this.keywords = keywords;
        this.dateAjout = dateAjout;
        this.user_question = user_question;
        this.lesreponses = lesreponses;
    }

    public Question(Long id, String titre, String contenu, String anonymous, String keywords, Date dateAjout, User user_question, List<Answer> lesreponses) {
        this.id = id;
        this.titre = titre;
        this.contenu = contenu;
        this.anonymous = anonymous;
        this.keywords = keywords;
        this.dateAjout = dateAjout;
        this.user_question = user_question;
        this.lesreponses = lesreponses;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
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

    public User getUser_question() {
        return user_question;
    }

    public void setUser_question(User user_question) {
        this.user_question = user_question;
    }

    public List<Answer> getLesreponses() {
        return lesreponses;
    }

    public void setLesreponses(List<Answer> lesreponses) {
        this.lesreponses = lesreponses;
    }
}
