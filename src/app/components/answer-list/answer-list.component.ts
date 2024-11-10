import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from "../../models/question.interface";

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.css']
})
export class AnswerListComponent implements OnInit {
  @Input() questionList: Question[] = [];
  @Output() nextQuestionEvent: EventEmitter<void> = new EventEmitter();

  public currentQuestion = 0;

  ngOnInit() {
    const question = sessionStorage.getItem('currentQuestion');
    if (question) {
      this.currentQuestion = Number(question);
    }
  }

  nextQuestion(): void {
    this.currentQuestion += 1;
    this.nextQuestionEvent.emit();
  }
}
