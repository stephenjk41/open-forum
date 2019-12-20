import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Answer, Question } from './question.model';
import { Observable, of } from 'rxjs';
import { TrendingService } from './trending.service';
import { leftJoin } from './collectionJoin';
import { shareReplay, switchMap } from 'rxjs/operators';
import { IUser } from './user.model';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  questions$: any;
  user$: Observable<any>;
  public user: IUser = {
    uid: "",
    email: "",
    displayName: ""
  }


  constructor(private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    public trending: TrendingService) {
    this.questions$ = this.db
      .collection('questions')
      .valueChanges({ idField: 'id' })
      .pipe(
        leftJoin(this.db, 'qid', 'answers', 100),
        shareReplay(1)
      );
  }

  create_NewAnswer(record: Answer) {
    return this.db.collection(`answers`).doc(record.aid).set(record);
  }

  edit_answer(record: Answer) {
    return this.db.collection(`answers`).doc(record.aid).update(record);
  }

  delete_answer(record) {
    return this.db.collection(`answers`).doc(record.id).delete();
  }

  newAnswerTemplate(question: Question) {
    var data = {
      aid: this.db.createId(),
      qid: question.qid,
      answer: '',
      author: '',
      upvote: 0,
      downvote: 0,
      upvotedUsers: [],
      downvotedUsers: [],
      score: 0
    }
    return data;
  }

  voteAnswerTemplate(answer: Answer) {
    var data = {
      aid: answer.aid,
      qid: answer.qid,
      answer: answer.answer,
      author: answer.author,
      upvote: answer.upvote,
      downvote: answer.downvote,
      upvotedUsers: answer.upvotedUsers,
      downvotedUsers: answer.downvotedUsers,
      score: answer.score
    }
    return data;
  }




}
