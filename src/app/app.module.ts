import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { AnswerComponent } from './components/answer/answer.component';
import { HttpClientModule } from "@angular/common/http";
import { AnswerListComponent } from './components/answer-list/answer-list.component';
import { XComponent } from './components/x/x.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AnswerComponent,
    AnswerListComponent,
    XComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
