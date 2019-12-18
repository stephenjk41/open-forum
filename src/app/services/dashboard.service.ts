import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Question } from './question.model';
import { AuthService } from './auth.service';
import { IUser } from './user.model';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  questionsRef: AngularFirestoreCollection<Question[]> = null;
  questions$: any;
  user$: any;
  cUser: IUser = {
    uid: "",
    displayName: "",
    email: ""
  };
  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, public auth: AuthService) {
    console.log(this.auth.user$)
    if (this.auth.user$) {
      this.questions$ = this.getQuestionsList(this.auth.user)
      // this.auth.user$.subscribe(user => {
      // this.cUser.uid = user.uid;
      // this.cUser.email = user.email;
      // this.cUser.displayName = user.displayName;
      // console.log(this.auth.user)
      // this.questions$ = this.getQuestionsList(this.auth.user)
      // })
    }
  }

  getQuestionsList(user: IUser): AngularFirestoreCollection<Question[]> {
    // console.log(this.userId)
    // if (!this.userId) return;

    this.questionsRef = this.db.collection(`questions`, ref => ref.where('userId', '==', user.uid))
    this.questions$ = this.questionsRef.valueChanges({ idField: 'id' });
    this.questions$.subscribe(questions => {
      console.log(questions);
    })
    return this.questions$;
  }

  createQuestion(question: Question) {
    this.db.collection(`questions`).add(question);
  }

  delete_question(record_id) {
    this.db.doc('questions/' + record_id).delete();
  }

  edit_question(record_id: string, question: Question) {
    this.questionsRef.doc(record_id).update(question);
  }

}
