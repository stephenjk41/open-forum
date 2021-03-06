import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { QuestionService } from 'src/app/services/question.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Question } from '../../services/question.model';
import { IUser } from '../../services/user.model';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  questionListUser = [];
  userData: IUser = {
    uid: "",
    email: "",
    displayName: ""
  };
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public auth: AuthService,
    public questionService: QuestionService,
    public dialog: MatDialog, ) {

  }

  ngOnInit() {

  }
  openNewQuestionDialog(): void {
    const dialogRef = this.dialog.open(NewQuestionDialog, { width: "50%" });
  }

  goHome(): void {
    this.auth.dashOpen = false;
    this.auth.loginOpen = false;
  }

  goDashboard(): void {
    this.auth.dashOpen = true;
    this.auth.loginOpen = false;
    console.log(this.auth.dashOpen)
  }
  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialog, { width: "50%" });
  }


}

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})

export class LoginDialog implements OnInit {
  constructor(public auth: AuthService,
    public dialogRef: MatDialogRef<LoginDialog>) { }
  ngOnInit() { }

  gsignIn() {
    this.auth.googleSignin()
    this.dialogRef.close();
  }

}

@Component({
  selector: 'new-question',
  templateUrl: 'new-question.html'
})

export class NewQuestionDialog implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewQuestionDialog>,
    public auth: AuthService,
    public questionService: QuestionService) { }

  userData: IUser = {
    uid: "",
    email: "",
    displayName: ""
  };

  newQuestion: Question;



  ngOnInit() { }

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      title: '',
      body: '',
    })
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
}


