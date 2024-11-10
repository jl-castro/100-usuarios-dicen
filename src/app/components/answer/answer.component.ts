import { Component, Input } from '@angular/core';
import { Answer } from "../../models/question.interface";
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  @Input() guessedAnswers: Answer = {} as Answer;
  @Input() id: number = 0;

  isShown = false;

  constructor(private gameService: GameService) {
  }

  showAnswer(): void {
    this.isShown = true;
    this.gameService.emitScoreUpdate(this.guessedAnswers.quantity);
  }
}
