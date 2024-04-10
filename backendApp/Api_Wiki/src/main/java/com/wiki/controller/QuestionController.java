package com.wiki.controller;

import com.wiki.entities.Item_wiki;
import com.wiki.entities.Question;
import com.wiki.entities.User;
import com.wiki.entities.Version_wiki;
import com.wiki.services.QuestionService;
import com.wiki.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
<<<<<<< HEAD
@CrossOrigin(origins = "*")
=======
@CrossOrigin(origins = "http://localhost:4200/")
>>>>>>> 29194d2f8ce71a48bf35d96902922a1e7720e111
@RequestMapping("/api/question")
public class QuestionController {



    @Autowired
    private QuestionService questionService;


    @GetMapping
    public List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @GetMapping("/{id}")
    public Question getQuestionByID(@PathVariable(value = "id") Long id)
    {
        return questionService.getQuestionById(id);
    }
    @DeleteMapping("/{id}")
    public void deleteQuestionbyID(@PathVariable(value = "id") Long id) {
        questionService.deleteQuestion(id);
    }

    @PostMapping("/{iduser}")
    public Question addQuestion(@Valid @RequestBody Question question,@PathVariable(value = "iduser") Long iduser) throws SQLException {
        return questionService.addQuestion(question,iduser);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Question> updateQuestion(@PathVariable(value = "id") Long id, @Valid @RequestBody Question question) {
        Question questionupdated = questionService.updateQuestion(id,question);

        if (questionupdated != null) {
            return ResponseEntity.ok(questionupdated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
