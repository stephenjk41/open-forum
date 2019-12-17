import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/services/trending.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Question, Answer } from 'src/app/services/question.model';
import { FormGroup, FormControl } from '@angular/forms';
import { AnswerService } from 'src/app/services/answer.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  questions$: any;
  answers$: any;
  userId: string;
  displayName: string;
  newAnswer: Answer;
  logQuestion: Question;
  data_questions: any[];

  constructor(public trending: TrendingService,
    public dash: DashboardService,
    private auth: AuthService,
    public answerService: AnswerService,
    public dialog: MatDialog) {
    this.auth.user$.subscribe(user => {
      this.userId = user.uid;
      this.displayName = user.displayName;
    })
  }

  ngOnInit() {
    this.matchQuestionsAndAnswers();
    // console.log(this.questions$);
  }

  form: FormGroup = new FormGroup({
    answer: new FormControl(''),
  });

  matchQuestionsAndAnswers() {
    this.answers$ = this.answerService.getAnswersList();
    this.questions$ = this.trending.getQuestionsList();

    this.questions$.subscribe(questions => {
      this.answers$.subscribe(answers => {
        questions.forEach(question => {
          let content = answers.find(a => {
            if (a.qid != question.id) {
              console.log('delted answer with title ' + a.title)
              this.answerService.delete_answer(a.id);
            } else {
              console.log(a);
              question.answers.push(a);
              this.data_questions.push(question);
              return true;
            }
          })
        })
      })
      console.log(this.data_questions)
    })
  }


  setVoteQuestion(question) {
    this.logQuestion = {
      uid: question.uid,
      title: question.title,
      body: question.body,
      author: question.author,
      time: question.time,
      userId: question.userId,
      answers: question.answers
    }
  }

  postAnswer(question) {
    console.log(this.form)
    if (this.form.controls.answer.touched && !this.form.controls.answer.pristine) {
      this.newAnswer = {
        qid: question.id,
        answer: this.form.value.answer,
        author: this.displayName,
        upvote: 1,
        downvote: 0,
        upvotedUsers: [this.userId],
        downvotedUsers: []
      }
      console.log(this.newAnswer)
      console.log(this.answerService.create_NewAnswer(this.newAnswer))
    } else {
      const dialogRef = this.dialog.open(ErrorComponent, { width: "20%" });
    }

  }
}

@Component({
  selector: 'error',
  templateUrl: 'error.html'
})

export class ErrorComponent {
  constructor() {

  }
}
