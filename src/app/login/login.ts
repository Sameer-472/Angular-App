import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {
  show = true;

  students = ['sameer', 'peter', 'john']

  complexObj = [
    {
      name: 'sameer',
      age: '26'
    },
    {
      name: 'Test',
      age: '20'
    },
    {
      name: 'Check',
      age: '2'
    },
  ]

  login = false;
  block = 1;
  color = 'blue';

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        console.log(params)
      })
  }
}
