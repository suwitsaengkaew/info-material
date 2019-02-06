import { Component, OnInit } from '@angular/core';
import { QuizAnswerModel } from '../quiz-master/quiz.model';
import { QuizExamQaDatas } from '../quiz-master/quiz.data';

@Component({
  selector: 'app-quiz-process',
  templateUrl: './quiz-process.component.html',
  styleUrls: ['./quiz-process.component.css']
})
export class QuizProcessComponent implements OnInit {

  quizExamfinalinspection = QuizExamQaDatas;
  finalanswer: QuizAnswerModel[] = [];

  constructor() { }

  ngOnInit() {
  }

  onRadioChange(evt: QuizAnswerModel) {
    const _answer = this.finalanswer;
    const _question = evt.questionno;
    // console.log(_question);
    if (_answer.length === 0) {
      this.pushtoarray(evt);
    } else {
      const arrlen = _answer.length;
      let checkduplicate = -1;
      _answer.forEach((quiz) => {
        if (_question === quiz.questionno) {
          checkduplicate = 0;
        }
      });

      console.log(checkduplicate);
      if (checkduplicate !== -1 ) {
        // console.log('Duplicated');
        const _index = _answer.findIndex(item => item.questionno === _question);
        this.finalanswer.splice(_index, 1);
        this.pushtoarray(evt);
      } else {
        this.pushtoarray(evt);
      }
    }
  }

  private pushtoarray(evt) {
    this.finalanswer.push(evt);
  }

  submit() {
    const numberofquestion = this.quizExamfinalinspection.length;
    const numberoffinalanswer = this.finalanswer.length;
    let trueanswer = 0;
    console.log('Question Number -> ' + numberofquestion);
    console.log('Answer Number -> ' + numberoffinalanswer);
    if (confirm('คุณแน่ใจใช่มั้ย ')) {
      if (numberofquestion === numberoffinalanswer) {
        this.finalanswer.forEach(_trueanswer => {
          if (_trueanswer.finalanswer) {
            trueanswer += 1;
          }
        });
        alert('คะแนนที่ได้คือ ' + trueanswer + '/' + numberofquestion);
      } else {
        alert('ตอบไม่ครบ');
      }
    }
  }
}
