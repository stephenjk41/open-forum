import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Question } from './question.model';
import { AuthService } from './auth.service';
import { IUser } from './user.model';
import { switchMap, shareReplay } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { leftJoin } from './collectionJoin';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  questionsRef: AngularFirestoreCollection<Question[]> = null;
  questions$: any;
  user$: Observable<any>;
  userId: string;
  user: IUser = {
    uid: "",
    displayName: "",
    email: ""
  };
  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, public auth: AuthService) {
    this.auth.user$.subscribe(user => {
      this.userId = user.uid
      console.log(this.userId)
      this.questions$ = this.db
        .collection('questions', ref => ref.where('userId', '==', this.userId))
        .valueChanges({ idField: 'id' })
        .pipe(
          leftJoin(this.db, 'qid', 'answers', 100),
          shareReplay(1)
        );
      // this.getQuestionsList(this.userId);
    })



  }

  getQuestionsList(userId: string): AngularFirestoreCollection<Question[]> {
    this.questionsRef = this.db.collection(`questions`, ref => ref.where('userId', '==', userId))
    this.questions$ = this.questionsRef.valueChanges({ idField: 'id' });
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
