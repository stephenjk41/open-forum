import * as tslib_1 from "tslib";
import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
let UserDashComponent = class UserDashComponent {
    constructor(auth, dash, questionService, dialog, data) {
        this.auth = auth;
        this.dash = dash;
        this.questionService = questionService;
        this.dialog = dialog;
        this.data = data;
        this.user = {
            uid: "",
            email: "",
            displayName: ""
        };
    }
    ngOnInit() {
        this.questions = this.dash.getQuestionsList();
        this.auth.user$.subscribe(user => {
            this.user.displayName = user.displayName;
            this.user.uid = user.uid;
            this.user.email = user.email;
        });
    }
    deleteQuestion(questionId) {
        console.log(questionId);
        this.dash.delete_question(questionId);
    }
    openEditDialog(question) {
        const dialogRef = this.dialog.open(EditDialog, {
            width: "90%",
            data: { questionData: question }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            this.dialogValue = result.data;
        });
    }
    openEditProfile() {
        const dialogRef = this.dialog.open(EditProfile, {
            width: "70%",
        });
    }
};
UserDashComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-dash',
        templateUrl: './user-dash.component.html',
        styleUrls: ['./user-dash.component.css']
    }),
    tslib_1.__param(4, Inject(MAT_DIALOG_DATA))
], UserDashComponent);
export { UserDashComponent };
let EditProfile = class EditProfile {
    constructor() { }
    ngOnInit() { }
};
EditProfile = tslib_1.__decorate([
    Component({
        selector: 'edit-profile',
        templateUrl: 'edit-profile.html'
    })
], EditProfile);
export { EditProfile };
let EditDialog = class EditDialog {
    constructor(dialogRef, data, dash) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dash = dash;
        this.form = new FormGroup({
            title: new FormControl(),
            body: new FormControl(''),
        });
        this.questionId = data.questionData.id;
        this.fromPage = {
            uid: data.questionData.uid,
            title: data.questionData.title,
            body: data.questionData.body,
            qid: data.questionData.qid,
            author: data.questionData.author,
            time: data.questionData.time,
            userId: data.questionData.userId,
            answers: data.questionData.answers
        };
        console.log(this.fromPage);
    }
    ngOnInit() { }
    setQuestionData() {
        console.log(this.form);
        if (this.form.controls.title.touched && !this.form.controls.title.pristine) {
            this.fromPage.title = this.form.value.title;
        }
        if (this.form.controls.body.touched && !this.form.controls.body.pristine) {
            this.fromPage.body = this.form.value.body;
        }
    }
    onSubmit() {
        this.setQuestionData();
        console.log(this.fromPage);
        this.dash.edit_question(this.questionId, this.fromPage);
        this.dialogRef.close();
    }
};
EditDialog = tslib_1.__decorate([
    Component({
        selector: 'edit-dialog',
        templateUrl: 'edit.html',
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(MAT_DIALOG_DATA))
], EditDialog);
export { EditDialog };
//# sourceMappingURL=user-dash.component.js.map