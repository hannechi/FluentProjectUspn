package com.wiki.controller;

import com.wiki.entities.Answer;
import com.wiki.entities.Question;
import com.wiki.services.AnswerService;
import com.wiki.services.QuestionService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController

@CrossOrigin(origins = "*")

@RequestMapping("/api/answer")
public class AnswerController {



    @Autowired
    private AnswerService answerService;


    @GetMapping
    public List<Answer> getAllAnswers() {
        return answerService.getAllAnswers();
    }

    @GetMapping("/{id}")
    public Answer getAnswerbyId(@PathVariable(value = "id") Long id) {
        return answerService.getAnswerById(id);
    }
    @DeleteMapping("/{id}")
    public void deleteAnswerbyID(@PathVariable(value = "id") Long id) {
        answerService.deleteAnswer(id);

    }

    @PostMapping("/{iduser}/{idquestion}")
    public Answer addAnswer(@Valid @RequestBody Answer answer, @PathVariable(value = "iduser") Long iduser,@PathVariable(value = "idquestion") Long idquestion) throws SQLException {
        return answerService.addAnswer(answer,iduser,idquestion);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Answer> updateAnswer(@PathVariable(value = "id") Long id, @Valid @RequestBody Answer answer) {
        Answer answerupdated = answerService.updateAnswer(id,answer);

        if (answerupdated != null) {
            return ResponseEntity.ok(answerupdated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
