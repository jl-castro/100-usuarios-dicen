import { Component, HostListener, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import { Question } from "../../models/question.interface";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  questionList: Question[] = [];
  public teamOneScore = 0;
  public teamTwoScore = 0;
  public roundScore = 0;
  public showNeonX = false;
  public neonXInstances: number[] = [];

  constructor(public gameService: GameService) {
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ((event.key === 'x' || event.key === 'X') && this.neonXInstances.length < 3) {
      this.showNeonX = true;
      this.neonXInstances.push(this.neonXInstances.length);
      setTimeout(() => {
        this.showNeonX = false;
      }, 3000);
    }
  }

  ngOnInit(): void {
    this.gameService.loadQuestions().subscribe((questions) => {
      this.questionList = questions;
    });
    this.listenTotalScore();
  }

  listenTotalScore(): void {
    this.gameService.listenScoreUpdate().subscribe((score) => {
      if (score) {
        this.roundScore += score;
      }
    });
  }

  loadScoreToTeamOne(): void {
    this.teamOneScore += this.roundScore;
    this.roundScore = 0;
  }

  loadScoreToTeamTwo(): void {
    this.teamTwoScore += this.roundScore;
    this.roundScore = 0;
  }

  listenNextQuestionEvent(): void {
    this.roundScore = 0;
    this.neonXInstances = [];
  }
}
