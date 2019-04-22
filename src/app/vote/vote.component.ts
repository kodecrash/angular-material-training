import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  totalVotes = 0;

  constructor() { }

  ngOnInit() {
  }

  upVote() {
    this.totalVotes += 1;
  }

  downVote() {
    this.totalVotes -= 1;
  }

}
