package com.wiki.services;

import com.wiki.entities.Item_wiki;
import com.wiki.entities.Version_wiki;
import com.wiki.repository.ItemWikiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemWikiService {

    @Autowired
    private ItemWikiRepository itemWikiRepository;

    public List<Item_wiki> getAllItemWikis() {
        return itemWikiRepository.findAll();
    }

    public Item_wiki createItemWiki(Item_wiki item_wiki) {
        return itemWikiRepository.save(item_wiki);
    }

    public Item_wiki getItemWki(Long id)
    {
        return this.itemWikiRepository.findById(id).orElse(null);
    }
    public Item_wiki getFirstItemWki()
    {
        return this.itemWikiRepository.getFirstItem();
    }


    public void deleteItem(Long id) {
        Optional<Item_wiki> itembyid = itemWikiRepository.findById(id);
        if(itembyid.isPresent()==false)
        {
            throw new IllegalStateException("Item dosent exist !");
        }
        else {
          itemWikiRepository.deleteById(id);
        }
    }
}
