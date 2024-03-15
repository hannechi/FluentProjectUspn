package com.wiki.entities;


import java.sql.Blob;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ext.SqlBlobSerializer;

import jakarta.persistence.*;

@Entity
@Table(name = "version_wiki")
public class Version_wiki {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "contenu", columnDefinition="LONGTEXT")
    private String contenu;
    @Column(name = "date_ajout")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateAjout;

	@JsonIgnore
	@ManyToOne(cascade = {CascadeType.ALL},fetch = FetchType.LAZY)
	@JoinColumn(name = "item_id")
	private Item_wiki item_wiki;

	public Item_wiki getItem_wiki() {
		return item_wiki;
	}

	public void setItem_wiki(Item_wiki item_wiki) {
		this.item_wiki = item_wiki;
	}

	public Version_wiki() {
		super() ;
	}
	

	public Version_wiki(Long id, String contenu, Date dateAjout) {
		super();
		this.id = id;
		this.contenu = contenu;
		this.dateAjout = dateAjout;
	}


	public Version_wiki(String contenu, Date dateAjout) {
		super();
		this.contenu = contenu;
		this.dateAjout = dateAjout;
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getContenu() {
		return contenu;
	}

	public void setContenu(String contenu) {
		this.contenu = contenu;
	}

	public Date getDateAjout() {
		return dateAjout;
	}

	public void setDateAjout(Date dateAjout) {
		this.dateAjout = dateAjout;
	}

    
}
