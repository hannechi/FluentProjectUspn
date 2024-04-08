package com.wiki.services;


import com.wiki.entities.Item_wiki;
import com.wiki.entities.Question;
import com.wiki.entities.User;
import com.wiki.entities.Version_wiki;
import com.wiki.repository.QuestionRepository;
import com.wiki.repository.UserRepository;
import com.wiki.repository.VersionWikiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {


    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    public Question getQuestionById(Long id) {
        return questionRepository.findById(id).orElse(null);
    }

    public Question addQuestion(Question question,Long iduser) {
        User userbyid = userRepository.findById(iduser).orElse(null);
        if(userbyid !=null)
        {
            question.setUser_question(userbyid);
            return questionRepository.save(question);
        }
        else
        {
            throw new IllegalStateException("User dosent exist !");
        }

    }


    public void deleteQuestion(Long id) {
        Optional<Question> questionbyid = questionRepository.findById(id);
        if(questionbyid.isPresent()==false)
        {
            throw new IllegalStateException("Question dosent exist !");
        }
        else {
            questionRepository.deleteById(id);
        }
    }
    public Question updateQuestion(Long id, Question question) {
        Question questionbyid = questionRepository.findById(id).orElse(null);

        if (questionbyid != null) {
            questionbyid.setTitre(question.getTitre());
            questionbyid.setContenu(question.getContenu());
            questionbyid.setAnonymous(question.getAnonymous());
            questionbyid.setKeywords(question.getKeywords());
            return questionRepository.save(questionbyid);
        }
        else
        {
            throw new IllegalStateException("Question dosent exist !");
        }

    }

}
