import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'login',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
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
}
