import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizmanagement',
  templateUrl: './quizmanagement.component.html',
  styleUrls: ['./quizmanagement.component.css']
})
export class QuizmanagementComponent implements OnInit {

  constructor(private router: Router, private routerParam: ActivatedRoute) { }

  user: { username: string, section: string };
  Examlists = [
    'Exam1', 'Exam2', 'Exam3', 'Exam4', 'Exam5', 'Exam6', 'Exam7'
  ];

  ngOnInit() {
    this.user = {
      username: this.routerParam.snapshot.params['username'],
      section: this.routerParam.snapshot.params['section']
    };
  }

}
