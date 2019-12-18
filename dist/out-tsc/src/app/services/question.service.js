import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let QuestionService = class QuestionService {
    constructor(db, auth, dash) {
        this.db = db;
        this.auth = auth;
        this.dash = dash;
        this.qRef = this.dash.questionsRef;
        this.user = this.auth.user$;
    }
    addQuestion(fbQuestion) {
        this.question.push({
            title: fbQuestion.title,
            body: fbQuestion.body,
            author: fbQuestion.author,
            time: fbQuestion.time,
            userId: fbQuestion.userId,
        });
    }
    create_NewQuestion(record) {
        return this.db.collection(`questions`).doc(record.qid).set(record);
    }
    newQuestionTemplate(data) {
        data = {
            uid: "",
            title: "",
            body: "",
            qid: this.db.createId(),
            author: "",
            time: "",
            userId: "",
            answers: []
        };
        return data;
    }
};
QuestionService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], QuestionService);
export { QuestionService };
//# sourceMappingURL=question.service.js.map