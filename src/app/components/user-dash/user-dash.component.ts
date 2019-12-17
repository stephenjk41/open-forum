import { Component, OnInit, Inject, Optional } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Question } from '../../services/question.model';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { IUser } from '../../services/user.model';
import { DashboardService } from 'src/app/services/dashboard.service';
import { QuestionService } from 'src/app/services/question.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  questions: AngularFirestoreCollection<Question[]>;
  constructor(public auth: AuthService,
    public dash: DashboardService,
    public questionService: QuestionService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  dialogValue: Question;
  user: IUser = {
    uid: "",
    email: "",
    displayName: ""
  };

  ngOnInit() {
    this.questions = this.dash.getQuestionsList()
    this.auth.user$.subscribe(user => {
      this.user.displayName = user.displayName;
      this.user.uid = user.uid;
      this.user.email = user.email;
    })
  }

  deleteQuestion(questionId: string) {
    console.log(questionId);
    this.dash.delete_question(questionId)
  }

  openEditDialog(question): void {
    const dialogRef = this.dialog.open(EditDialog, {
      width: "90%",
      data: { questionData: question }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.dialogValue = result.data;
    });
  }

}

@Component({
  selector: 'edit-dialog',
  templateUrl: 'edit.html',

})

export class EditDialog implements OnInit {
  fromPage: Question;
  questionId: string;

  constructor(public dialogRef: MatDialogRef<EditDialog>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dash: DashboardService) {
    this.questionId = data.questionData.id

    this.fromPage = {
      uid: data.questionData.uid,
      title: data.questionData.title,
      body: data.questionData.body,
      author: data.questionData.author,
      time: data.questionData.time,
      userId: data.questionData.userId,
      answers: data.questionData.answers

    };
    console.log(this.fromPage)
  }
  ngOnInit() { }

  form: FormGroup = new FormGroup({
    title: new FormControl(),
    body: new FormControl(''),
  });
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
    console.log(this.fromPage)
    this.dash.edit_question(this.questionId, this.fromPage);
    this.dialogRef.close();
  }

}
