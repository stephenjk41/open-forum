import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/services/trending.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Question, Answer } from 'src/app/services/question.model';
import { FormGroup, FormControl } from '@angular/forms';
import { AnswerService } from 'src/app/services/answer.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  questions$: any;
  user$: any;
  answers$: any;
  userId: string;
  displayName: string;
  newAnswer: Answer;
  logQuestion: Question;
  data_questions: Observable<any[]>;

  constructor(public trending: TrendingService,
    public dash: DashboardService,
    public auth: AuthService,
    public answerService: AnswerService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.trending.questions$.subscribe(question => {
      console.log(question)
    })
  }

  form: FormGroup = new FormGroup({
    answer: new FormControl(''),
  });

  postAnswer(question) {
    if (this.form.controls.answer.touched && !this.form.controls.answer.pristine) {
      this.newAnswer = this.answerService.newAnswerTemplate(question);
      this.newAnswer.answer = this.form.value.answer;

      this.newAnswer.author = this.displayName;
      this.newAnswer.upvotedUsers = [];
      this.newAnswer.downvotedUsers = [];
      this.trending.loginError = false;
      this.answerService.create_NewAnswer(this.newAnswer)
    } else if (!this.auth.signedIn) {
      this.trending.loginError = true;
      console.log("sneaky test")
      const dialogRef = this.dialog.open(ErrorComponent, { width: "20%" });
    } else {
      const dialogRef = this.dialog.open(ErrorComponent, { width: "20%" });
    }
  }

  upvote(answer: Answer) {
    var upAnswer = this.answerService.voteAnswerTemplate(answer);
    const containsUp = answer.upvotedUsers.some(user => user === this.userId)
    const containsDown = answer.downvotedUsers.some(user => user === this.userId)
    if (this.auth.signedIn) {
      console.log("sneakier test")
      if (!containsUp && !containsDown && (upAnswer.score <= 100 && upAnswer.score >= -100)) {
        answer.upvotedUsers.push(this.userId)
        upAnswer.upvote += 1;
        upAnswer.score = (upAnswer.upvote - upAnswer.downvote);
        this.answerService.edit_answer(upAnswer);
      }
      else if (!containsUp && containsDown && (upAnswer.score <= 100 && upAnswer.score >= -100)) {
        const i = answer.downvotedUsers.indexOf(this.userId)
        answer.downvotedUsers.splice(i, 1);
        answer.upvotedUsers.push(this.userId)
        upAnswer.upvote += 1;
        upAnswer.downvote -= 1;
        upAnswer.score = (upAnswer.upvote - upAnswer.downvote);
        this.answerService.edit_answer(upAnswer);
      }
      else console.log("already voted up")
    }
    else {
      const dialogRef = this.dialog.open(ErrorComponent, { width: "50%" });
    }

  }

  downvote(answer: Answer) {
    var downAnswer = this.answerService.voteAnswerTemplate(answer);
    const containsUp = answer.upvotedUsers.some(user => user === this.userId)
    const containsDown = answer.downvotedUsers.some(user => user === this.userId)
    if (this.auth.signedIn) {
      if (!containsUp && !containsDown && (downAnswer.score <= 100 && downAnswer.score >= -100)) {
        answer.downvotedUsers.push(this.userId)
        downAnswer.downvote += 1;
        downAnswer.score = (downAnswer.upvote - downAnswer.downvote);
        this.answerService.edit_answer(downAnswer);
      }
      else if (containsUp && !containsDown && (downAnswer.score <= 100 && downAnswer.score >= -100)) {
        const i = answer.upvotedUsers.indexOf(this.userId)
        answer.upvotedUsers.splice(i, 1);
        answer.downvotedUsers.push(this.userId)
        downAnswer.upvote -= 1;
        downAnswer.downvote += 1;
        downAnswer.score = (downAnswer.upvote - downAnswer.downvote);
        this.answerService.edit_answer(downAnswer);
      }
      else console.log("already voted down")
    } else {
      const dialogRef = this.dialog.open(ErrorComponent, { width: "50%" });
    }

  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  didntPost(question) {
    var found = question.answers.some(answer => answer.author === this.displayName)
    if (!found)
      return true;
    else
      return false;
  }

  voteUp(answer) {
    var found = answer.upvotedUsers.some(uid => uid === this.userId);
    if (found)
      return true
    else
      return false

  }

  voteDown(answer) {
    var found = answer.downvotedUsers.some(uid => uid === this.userId);
    if (found)
      return true
    else
      return false
  }

}

@Component({
  selector: 'error',
  templateUrl: 'error.html'
})

export class ErrorComponent {

  constructor(public auth: AuthService) {

  }
}
