package com.wiki.repository;

import com.wiki.entities.Item_wiki;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ItemWikiRepository extends JpaRepository<Item_wiki, Long> {

    @Query(value = "SELECT * FROM item_wiki WHERE id = (SELECT MIN(id) FROM item_wiki)", nativeQuery = true)
    Item_wiki getFirstItem();
}
