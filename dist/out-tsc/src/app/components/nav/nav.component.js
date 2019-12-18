import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
let NavComponent = class NavComponent {
    constructor(breakpointObserver, auth, questionService, dialog) {
        this.breakpointObserver = breakpointObserver;
        this.auth = auth;
        this.questionService = questionService;
        this.dialog = dialog;
        this.questionListUser = [];
        this.userData = {
            uid: "",
            email: "",
            displayName: ""
        };
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(result => result.matches), shareReplay());
    }
    ngOnInit() {
        this.auth.user$.subscribe(user => {
            console.log(user);
            this.userData.displayName = user.displayName;
            this.userData.uid = user.uid;
            this.userData.email = user.email;
            console.log(this.userData);
        });
    }
    openNewQuestionDialog() {
        const dialogRef = this.dialog.open(NewQuestionDialog, { width: "50%" });
    }
    goHome() {
        this.auth.dashOpen = false;
    }
    goDashboard() {
        this.auth.dashOpen = true;
        console.log(this.auth.dashOpen);
    }
};
NavComponent = tslib_1.__decorate([
    Component({
        selector: 'app-nav',
        templateUrl: './nav.component.html',
        styleUrls: ['./nav.component.css']
    })
], NavComponent);
export { NavComponent };
let NewQuestionDialog = class NewQuestionDialog {
    constructor(dialogRef, auth, questionService) {
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.questionService = questionService;
        this.userData = {
            uid: "",
            email: "",
            displayName: ""
        };
        this.form = new FormGroup({
            title: new FormControl(''),
            body: new FormControl(''),
        });
    }
    ngOnInit() {
        this.auth.user$.subscribe(user => {
            console.log(user);
            this.userData.displayName = user.displayName;
            this.userData.uid = user.uid;
            this.userData.email = user.email;
            console.log(this.userData);
        });
    }
    initializeFormGroup() {
        this.form.setValue({
            title: '',
            body: '',
        });
    }
    setQuestionData() {
        this.newQuestion = this.questionService.newQuestionTemplate(this.newQuestion);
        this.newQuestion.author = this.userData.displayName;
        this.newQuestion.userId = this.userData.uid;
        this.newQuestion.time = String(Date.now());
        this.newQuestion.title = this.form.controls.title.value;
        this.newQuestion.body = this.form.controls.body.value;
    }
    onSubmit() {
        this.setQuestionData();
        this.questionService.create_NewQuestion(this.newQuestion);
        this.dialogRef.close();
    }
};
NewQuestionDialog = tslib_1.__decorate([
    Component({
        selector: 'new-question',
        templateUrl: 'new-question.html'
    })
], NewQuestionDialog);
export { NewQuestionDialog };
//# sourceMappingURL=nav.component.js.map