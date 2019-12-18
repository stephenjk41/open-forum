import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
let DashboardService = class DashboardService {
    constructor(db, afAuth, auth) {
        this.db = db;
        this.afAuth = afAuth;
        this.auth = auth;
        this.questionsRef = null;
        this.cUser = {
            uid: "",
            displayName: "",
            email: ""
        };
        this.user$ = this.afAuth.authState.pipe(switchMap(user => {
            if (user) {
                return this.db.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return of(null);
            }
        }));
        this.auth.user$.subscribe(user => {
            this.cUser.uid = user.uid;
            this.cUser.email = user.email;
            this.cUser.displayName = user.displayName;
        });
    }
    getQuestionsList() {
        // console.log(this.userId)
        // if (!this.userId) return;
        this.questionsRef = this.db.collection(`questions`, ref => ref.where('userId', '==', this.cUser.uid));
        this.questions$ = this.questionsRef.valueChanges({ idField: 'id' });
        this.questions$.subscribe(questions => {
            console.log(questions);
        });
        return this.questions$;
    }
    createQuestion(question) {
        this.db.collection(`questions`).add(question);
    }
    delete_question(record_id) {
        this.db.doc('questions/' + record_id).delete();
    }
    edit_question(record_id, question) {
        this.questionsRef.doc(record_id).update(question);
    }
};
DashboardService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DashboardService);
export { DashboardService };
//# sourceMappingURL=dashboard.service.js.map