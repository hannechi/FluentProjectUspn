package com.wiki.entities;


import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "item_wiki")
public class Item_wiki {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nom_item")
    private String nom_item;


    @OneToMany(mappedBy = "item_wiki", cascade = CascadeType.ALL)
    private List<Version_wiki> wikis;

    public List<Version_wiki> getWikis() {
        return wikis;
    }

    public void setWikis(List<Version_wiki> wikis) {
        this.wikis = wikis;
    }

    public Item_wiki(Long id, String nom_item) {
        this.id = id;
        this.nom_item = nom_item;
    }

    public Item_wiki(String nom_item) {
        this.nom_item = nom_item;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom_item() {
        return nom_item;
    }

    public void setNom_item(String nom_item) {
        this.nom_item = nom_item;
    }

    public Item_wiki() {
    }
}
