import { Injectable } from '@angular/core';
import {
  AngularFirestore,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './auth.service'
import { Question } from './question.model';
import { switchMap } from 'rxjs/operators';
import { DashboardService } from './dashboard.service';
import { IUser } from './user.model';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  user$: Observable<any>;
  public user: IUser = {
    uid: "",
    email: "",
    displayName: ""
  }
  constructor(private db: AngularFirestore,
    private auth: AuthService,
    private afAuth: AngularFireAuth,
    private dash: DashboardService) { }
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
    return this.db.collection(`questions`).doc(record.qid).set(record);
  }

  newQuestionTemplate(data: Question) {
    data = {
      uid: "",
      title: "",
      body: "",
      qid: this.db.createId(),
      author: "",
      time: "",
      userId: "",
      answers: []
    }
    return data;
  }



}
