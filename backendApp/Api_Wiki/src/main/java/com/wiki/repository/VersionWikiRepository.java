package com.wiki.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.wiki.entities.Version_wiki;

@Repository
public interface VersionWikiRepository extends JpaRepository<Version_wiki, Long>{
    Optional<Version_wiki> findFirstByOrderByDateAjoutDesc();

    @Query(value = "SELECT * from version_wiki  WHERE item_id = :id and date_ajout = ( SELECT MAX(date_ajout) from version_wiki  WHERE item_id = :id )",nativeQuery = true)
    Optional<Version_wiki> getDernierVersionWikiOfItemID(@Param("id") Integer id);


}
