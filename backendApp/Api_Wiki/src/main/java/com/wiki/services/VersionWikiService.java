package com.wiki.services;

import com.wiki.entities.Item_wiki;
import com.wiki.repository.ItemWikiRepository;
import org.jsoup.Jsoup;
import org.jsoup.safety.Safelist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wiki.entities.Version_wiki;
import com.wiki.repository.VersionWikiRepository;

import java.util.List;
import java.util.Optional;

@Service
public class VersionWikiService {

    @Autowired
    private VersionWikiRepository versionWikiRepository;
    @Autowired
    private ItemWikiRepository itemWikiRepository;

    public List<Version_wiki> getAllVersionWikis() {
        return versionWikiRepository.findAll();
    }

    public Version_wiki getVersionWikiById(Long id) {
        return versionWikiRepository.findById(id).orElse(null);
    }

    public Version_wiki createVersionWiki(Version_wiki versionWiki) {
        return versionWikiRepository.save(versionWiki);
    }

    public Version_wiki updateVersionWiki(Long id, Version_wiki versionWikiDetails) {
    	Version_wiki versionWiki = versionWikiRepository.findById(id).orElse(null);

        if (versionWiki != null) {
            versionWiki.setContenu(versionWikiDetails.getContenu());
            versionWiki.setDateAjout(versionWikiDetails.getDateAjout());
            return versionWikiRepository.save(versionWiki);
        }
        return null;
    }

    public void deleteVersionWiki(Long id) {
        versionWikiRepository.deleteById(id);
    }
    
    public Version_wiki getDernierWiki() {
        return versionWikiRepository.findFirstByOrderByDateAjoutDesc().orElse(null);
    }
    public  Optional<Version_wiki> getVersionWikiByidAndLastversion(Integer id) {
        return versionWikiRepository.getDernierVersionWikiOfItemID(id);
    }
    public Optional<Version_wiki> getVersionWikiFIrstItemAndLastversion() {
        Item_wiki firstitem = this.itemWikiRepository.getFirstItem();
        if (firstitem != null) {
            return versionWikiRepository.getDernierVersionWikiOfItemID(Math.toIntExact(firstitem.getId()));
        } else {
            return null;
        }
    }



}
