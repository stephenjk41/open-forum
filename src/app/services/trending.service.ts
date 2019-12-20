import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Question, Answer } from './question.model';
import { IUser } from './user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  user$: Observable<any>;
  public user: IUser = {
    uid: "",
    email: "",
    displayName: ""
  }
  questionsRef: AngularFirestoreCollection<Question[]> = null;
  answerRef: AngularFirestoreCollection<Answer[]> = null;
  questions$: any;
  public loginError: boolean = false;

  cUser: IUser = {
    uid: "",
    displayName: "",
    email: ""
  };

  constructor(private db: AngularFirestore) { }

  getQuestionsList(): AngularFirestoreCollection<Question[]> {
    this.questionsRef = this.db.collection(`questions`)
    this.questions$ = this.questionsRef.valueChanges({ idField: 'id' });
    return this.questions$;
  }

  edit_question(record_id: string, question: any) {
    this.questionsRef.doc(record_id).update(question)
  }

}