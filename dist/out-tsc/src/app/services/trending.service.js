import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let TrendingService = class TrendingService {
    constructor(db) {
        this.db = db;
        this.questionsRef = null;
        this.answerRef = null;
        this.loginError = false;
        this.cUser = {
            uid: "",
            displayName: "",
            email: ""
        };
    }
    getQuestionsList() {
        this.questionsRef = this.db.collection(`questions`);
        this.questions$ = this.questionsRef.valueChanges({ idField: 'id' });
        return this.questions$;
    }
    edit_question(record_id, question) {
        this.questionsRef.doc(record_id).update(question);
    }
};
TrendingService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], TrendingService);
export { TrendingService };
//# sourceMappingURL=trending.service.js.map