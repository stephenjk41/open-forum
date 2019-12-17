import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { AuthService } from './auth.service'
import { Answer } from './question.model';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  answersRef: AngularFirestoreCollection<Answer[]> = null;
  answers$: any;
  constructor(private db: AngularFirestore) {
    this.getAnswersList();
  }

  getAnswersList(): AngularFirestoreCollection<Answer[]> {
    this.answersRef = this.db.collection(`answers`);
    this.answers$ = this.answersRef.valueChanges({ idField: 'id' });
    return this.answers$;
  }

  create_NewAnswer(record: Answer) {
    return this.db.collection(`answers`).add(record);
  }

  delete_answer(record) {
    return this.db.collection(`answer`).doc(record.id).delete();
  }
}
