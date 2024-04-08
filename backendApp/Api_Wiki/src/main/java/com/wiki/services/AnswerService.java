package com.wiki.services;


import com.wiki.entities.Answer;
import com.wiki.entities.Question;
import com.wiki.entities.User;
import com.wiki.repository.AnswerRepository;
import com.wiki.repository.QuestionRepository;
import com.wiki.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {


    @Autowired
    private AnswerRepository answerRepository;
    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Answer> getAllAnswers() {
        return answerRepository.findAll();
    }

    public Answer getAnswerById(Long id) {
        return answerRepository.findById(id).orElse(null);
    }

    public Answer addAnswer(Answer answer,Long iduser, Long idquestion) {
        User userbyid = userRepository.findById(iduser).orElse(null);
        Question question = questionRepository.findById(idquestion).orElse(null);
        if((userbyid !=null)&&(question!=null))
        {
            answer.setUser_answer(userbyid);
            answer.setQuestionAnswered(question);
            return answerRepository.save(answer);
        }
        else
        {
            throw new IllegalStateException("User or question dosent exist !");
        }

    }


    public void deleteAnswer(Long id) {
        Optional<Answer> answerbyid = answerRepository.findById(id);
        if(answerbyid.isPresent()==false)
        {
            throw new IllegalStateException("Question dosent exist !");
        }
        else {
            answerRepository.deleteById(id);
        }
    }

    public Answer updateAnswer(Long id, Answer answer) {
        Answer answerbyid = answerRepository.findById(id).orElse(null);

        if (answerbyid != null) {
            answerbyid.setTitre(answer.getTitre());
            answerbyid.setContenu(answer.getContenu());
            answerbyid.setAnonymous(answer.getAnonymous());
            return answerRepository.save(answerbyid);
        }
        else
        {
            throw new IllegalStateException("Answer dosent exist !");
        }

    }

}
