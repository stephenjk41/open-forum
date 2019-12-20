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
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  dialogValue: Question;
  user: IUser = {
    uid: "",
    email: "",
    displayName: ""
  };

  ngOnInit() {

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

  openEditProfile(): void {
    const dialogRef = this.dialog.open(EditProfile, {
      width: "70%",
    });
  }

  openViewDialog(question): void {
    const dialogRef = this.dialog.open(ViewQuestionDialog, {
      width: "90%",
      data: { questionData: question }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed', result);
    //   this.dialogValue = result.data;
    // });
  }



}

@Component({
  selector: 'edit-profile',
  templateUrl: 'edit-profile.html'
})

export class EditProfile implements OnInit {
  user: IUser;
  constructor(public auth: AuthService) {
    this.auth.user$.subscribe(user => {
      this.user = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        fname: user.fname,
        lname: user.lname,
        dob: user.dob
      }
    })
  }

  ngOnInit() { }

  form: FormGroup = new FormGroup({
    displayName: new FormControl(''),
    dob: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl('')
  });

  setUserData() {
    console.log(this.form)
    if (this.form.controls.displayName.touched && !this.form.controls.displayName.pristine) {
      this.user.displayName = this.form.value.displayName;
    }
    if (this.form.controls.dob.touched && !this.form.controls.dob.pristine) {
      this.user.dob = this.form.value.dob;
    }
    if (this.form.controls.fname.touched && !this.form.controls.fname.pristine) {
      this.user.fname = this.form.value.fname;
    }
    if (this.form.controls.lname.touched && !this.form.controls.lname.pristine) {
      this.user.lname = this.form.value.lname;
    }
    if (this.form.controls.email.touched && !this.form.controls.email.pristine) {
      this.user.email = this.form.value.email;
    }

  }

  editUser() {
    this.setUserData();
    console.log(this.user)
    this.auth.edit_user(this.user);
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
      qid: data.questionData.qid,
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

@Component({
  selector: 'view-question',
  templateUrl: 'view-question.html',

})

export class ViewQuestionDialog implements OnInit {
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
      qid: data.questionData.qid,
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

  // setQuestionData() {
  //   console.log(this.form);
  //   if (this.form.controls.title.touched && !this.form.controls.title.pristine) {
  //     this.fromPage.title = this.form.value.title;
  //   }
  //   if (this.form.controls.body.touched && !this.form.controls.body.pristine) {
  //     this.fromPage.body = this.form.value.body;
  //   }
  // }
  // onSubmit() {
  //   this.setQuestionData();
  //   console.log(this.fromPage)
  //   this.dash.edit_question(this.questionId, this.fromPage);
  //   this.dialogRef.close();
  // }

}
