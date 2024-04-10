package com.wiki.controller;

import com.wiki.entities.Item_wiki;
import com.wiki.entities.Version_wiki;
import com.wiki.services.ItemWikiService;
import com.wiki.services.VersionWikiService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/itemwiki")
public class ItemWikiController {

    @Autowired
    private ItemWikiService itemWikiService;


    @GetMapping
    public List<Item_wiki> getAllItemWikis() {
        return itemWikiService.getAllItemWikis();
    }

    @PostMapping
    public Item_wiki createItemWiki(@Valid @RequestBody Item_wiki item_wiki) throws SQLException {
        return itemWikiService.createItemWiki(item_wiki);
    }

    @DeleteMapping("/deleteItem/{id}")
    public void deleteItem (@PathVariable Long id)
    {
        this.itemWikiService.deleteItem(id);
    }



}
