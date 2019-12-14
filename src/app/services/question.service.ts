import { Injectable } from '@angular/core';
import {
  AngularFirestore,
} from '@angular/fire/firestore';
import { AuthService } from './auth.service'
import { Question } from './question.model';
import { DashboardService } from './dashboard.service';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  user: any;
  constructor(private db: AngularFirestore,
    private auth: AuthService,
    private dash: DashboardService) {
    this.user = this.auth.user$;
  }
  question: any;
  fbQuestion: any;
  qRef = this.dash.questionsRef;

  addQuestion(fbQuestion) {
    this.question.push({
      title: fbQuestion.title,
      body: fbQuestion.body,
      author: fbQuestion.author,
      time: fbQuestion.time,
      userId: fbQuestion.userId,
    })
  }
  create_NewQuestion(record: Question) {
    return this.db.collection(`questions`).add(record);
  }

}
