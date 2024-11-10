import { Injectable } from "@angular/core";
import { Question } from "../models/question.interface";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private scoreUpdate$ = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
  }

  loadQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('/assets/questions.json');
  }

  listenScoreUpdate(): Observable<number> {
    return this.scoreUpdate$.asObservable();
  }

  emitScoreUpdate(score: number): void {
    this.scoreUpdate$.next(score);
  }
}
