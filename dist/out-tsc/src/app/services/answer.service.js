import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { leftJoin } from './collectionJoin';
import { shareReplay } from 'rxjs/operators';
let AnswerService = class AnswerService {
    constructor(db, trending) {
        // this.getAnswersList();
        this.db = db;
        this.trending = trending;
        this.questions$ = this.db
            .collection('questions')
            .valueChanges({ idField: 'id' })
            .pipe(leftJoin(this.db, 'qid', 'answers', 100), shareReplay(1));
    }
    create_NewAnswer(record) {
        return this.db.collection(`answers`).doc(record.aid).set(record);
    }
    edit_answer(record) {
        return this.db.collection(`answers`).doc(record.aid).update(record);
    }
    delete_answer(record) {
        return this.db.collection(`answers`).doc(record.id).delete();
    }
    newAnswerTemplate(question) {
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
        };
        return data;
    }
    voteAnswerTemplate(answer) {
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
        };
        return data;
    }
};
AnswerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AnswerService);
export { AnswerService };
//# sourceMappingURL=answer.service.js.map