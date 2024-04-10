package com.wiki.controller;

import com.wiki.entities.Item_wiki;
import com.wiki.services.ItemWikiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wiki.entities.Version_wiki;
import com.wiki.services.VersionWikiService;

import jakarta.validation.Valid;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/versionWiki")
public class VersionWikiController {

    @Autowired
    private VersionWikiService versionWikiService;
    @Autowired
    private ItemWikiService itemWikiService;

    @GetMapping
    public List<Version_wiki> getAllVersionWikis() {
        return versionWikiService.getAllVersionWikis();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Version_wiki> getVersionWikiById(@PathVariable(value = "id") Long id) {
        Version_wiki versionwiki =  versionWikiService.getVersionWikiById(id);
        if (versionwiki != null) {
            return ResponseEntity.ok(versionwiki);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    
    @PostMapping
    public Version_wiki createVersionWiki(@Valid @RequestBody Version_wiki versionWiki) throws SQLException {
        return versionWikiService.createVersionWiki(versionWiki);
    }

    @RequestMapping("/ajouterVersionWiki/{id}")
    @PostMapping
    public Version_wiki createVersionWikByID(@Valid @RequestBody Version_wiki versionWiki,@PathVariable(value = "id") Long id) throws SQLException {
        Item_wiki item_wiki;
        if(id!=-1)
        {
            item_wiki = itemWikiService.getItemWki(id);
        }
        else
        {
            item_wiki = itemWikiService.getFirstItemWki();
        }

        if (item_wiki !=null)
        {
            versionWiki.setItem_wiki(item_wiki);
            return versionWikiService.createVersionWiki(versionWiki);
        }
        else
        {
            return null;
        }
    }



    @PutMapping("/{id}")
    public ResponseEntity<Version_wiki> updateVersionWiki(@PathVariable(value = "id") Long id, @Valid @RequestBody Version_wiki versionWikiDetails) {
    	Version_wiki updatedVersionWiki = versionWikiService.updateVersionWiki(id, versionWikiDetails);

        if (updatedVersionWiki != null) {
            return ResponseEntity.ok(updatedVersionWiki);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVersionWiki(@PathVariable(value = "id") Long id) {
        versionWikiService.deleteVersionWiki(id);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/dernier")
    public ResponseEntity<Version_wiki> getDernierWiki() {
        Version_wiki dernierWiki = versionWikiService.getDernierWiki();
        if (dernierWiki != null) {
            return ResponseEntity.ok(dernierWiki);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/dernierVersionWiki/{id}")
    public Optional<Version_wiki> getVersionWikiByIdandLast(@PathVariable(value = "id") Integer id) {

        return versionWikiService.getVersionWikiByidAndLastversion(id);
    }

    @GetMapping("/firstItemVersionwiki")
    public Optional<Version_wiki> getFirstItemWikiVersion()
    {
        return this.versionWikiService.getVersionWikiFIrstItemAndLastversion();
    }

    
}
