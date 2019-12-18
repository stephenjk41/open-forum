import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let TrendingComponent = class TrendingComponent {
    constructor(trending, dash, auth, answerService, dialog) {
        this.trending = trending;
        this.dash = dash;
        this.auth = auth;
        this.answerService = answerService;
        this.dialog = dialog;
        this.form = new FormGroup({
            answer: new FormControl(''),
        });
        this.step = 0;
        this.user$ = auth.getUserData().subscribe(user => {
            this.userId = user.uid;
            this.displayName = user.displayName;
            console.log(this.displayName);
        });
    }
    ngOnInit() {
        // console.log(this.questions$);
    }
    postAnswer(question) {
        if (this.form.controls.answer.touched && !this.form.controls.answer.pristine) {
            this.newAnswer = this.answerService.newAnswerTemplate(question);
            this.newAnswer.answer = this.form.value.answer;
            this.newAnswer.author = this.displayName;
            this.newAnswer.upvotedUsers = [];
            this.newAnswer.downvotedUsers = [];
            this.trending.loginError = false;
            this.answerService.create_NewAnswer(this.newAnswer);
        }
        else if (!this.auth.user$) {
            this.trending.loginError = true;
            const dialogRef = this.dialog.open(ErrorComponent, { width: "20%" });
        }
        else {
            const dialogRef = this.dialog.open(ErrorComponent, { width: "20%" });
        }
    }
    upvote(answer) {
        var upAnswer = this.answerService.voteAnswerTemplate(answer);
        const containsUp = answer.upvotedUsers.some(user => user === this.userId);
        const containsDown = answer.downvotedUsers.some(user => user === this.userId);
        if (!containsUp && !containsDown && (upAnswer.score <= 100 && upAnswer.score >= -100)) {
            answer.upvotedUsers.push(this.userId);
            upAnswer.upvote += 1;
            upAnswer.score = (upAnswer.upvote - upAnswer.downvote);
            this.answerService.edit_answer(upAnswer);
        }
        else if (!containsUp && containsDown && (upAnswer.score <= 100 && upAnswer.score >= -100)) {
            const i = answer.downvotedUsers.indexOf(this.userId);
            answer.downvotedUsers.splice(i, 1);
            answer.upvotedUsers.push(this.userId);
            upAnswer.upvote += 1;
            upAnswer.downvote -= 1;
            upAnswer.score = (upAnswer.upvote - upAnswer.downvote);
            this.answerService.edit_answer(upAnswer);
        }
        else
            console.log("already voted up");
    }
    downvote(answer) {
        var downAnswer = this.answerService.voteAnswerTemplate(answer);
        const containsUp = answer.upvotedUsers.some(user => user === this.userId);
        const containsDown = answer.downvotedUsers.some(user => user === this.userId);
        if (!containsUp && !containsDown && (downAnswer.score <= 100 && downAnswer.score >= -100)) {
            answer.downvotedUsers.push(this.userId);
            downAnswer.downvote += 1;
            downAnswer.score = (downAnswer.upvote - downAnswer.downvote);
            this.answerService.edit_answer(downAnswer);
        }
        else if (containsUp && !containsDown && (downAnswer.score <= 100 && downAnswer.score >= -100)) {
            const i = answer.upvotedUsers.indexOf(this.userId);
            answer.upvotedUsers.splice(i, 1);
            answer.downvotedUsers.push(this.userId);
            downAnswer.upvote -= 1;
            downAnswer.downvote += 1;
            downAnswer.score = (downAnswer.upvote - downAnswer.downvote);
            this.answerService.edit_answer(downAnswer);
        }
        else
            console.log("already voted down");
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
    didntPost(question) {
        var found = question.answers.some(answer => answer.author === this.displayName);
        if (!found)
            return true;
        else
            return false;
    }
    voteUp(answer) {
        var found = answer.upvotedUsers.some(uid => uid === this.userId);
        if (found)
            return true;
        else
            return false;
    }
    voteDown(answer) {
        var found = answer.downvotedUsers.some(uid => uid === this.userId);
        if (found)
            return true;
        else
            return false;
    }
};
TrendingComponent = tslib_1.__decorate([
    Component({
        selector: 'app-trending',
        templateUrl: './trending.component.html',
        styleUrls: ['./trending.component.css']
    })
], TrendingComponent);
export { TrendingComponent };
let ErrorComponent = class ErrorComponent {
    constructor(trending) {
        this.trending = trending;
    }
};
ErrorComponent = tslib_1.__decorate([
    Component({
        selector: 'error',
        templateUrl: 'error.html'
    })
], ErrorComponent);
export { ErrorComponent };
//# sourceMappingURL=trending.component.js.map