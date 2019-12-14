import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Question } from './question.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  questionsRef: AngularFirestoreCollection<Question[]> = null;
  questions$: any;
  userId: any;
  constructor(private db: AngularFirestore, private afAuth: AngularFireAuth, private auth: AuthService) {
    this.auth.user$.subscribe(user => {
      this.userId = user.uid;
    })
  }

  getQuestionsList(): AngularFirestoreCollection<Question[]> {
    // console.log(this.userId)
    // if (!this.userId) return;
    console.log(this.userId)
    this.questionsRef = this.db.collection(`questions`, ref => ref.where('userId', '==', this.userId))
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
