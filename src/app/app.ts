import { Component, signal, effect, computed, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { Profile } from './profile/profile';
import { FormsModule } from '@angular/forms';
import { LowerCasePipe, NgIf, UpperCasePipe } from '@angular/common';
import { Parent } from "./parent/parent";
import { Header } from './header/header';


@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterLink, RouterOutlet, Parent, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  // protected readonly title = signal('angular-app');
  name = "test";
  age = 30;
  color = 'green';
  education = "B.Tech";
  count: number = 0;
  inputValue: string = '';
  providedEmail: string = '';

  handleClick() {
    console.log("Button clicked");
  }

  handleIncrement() {
    this.count++;
  }

  handleDecrement() {
    this.count = Math.max(0, this.count - 1);
  }

  handleReset() {
    this.count = 0;
  }

  handleOnChange(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  getEmail(val: string) {
    this.providedEmail = val;
  }


  /// Iterate over items 

  arr = ["sameer", "ali", "sana", "sara", "sami", "samiya",];

  getValue(item: string) {
    console.log(item);
  }

  // signals and computed signals
  // signals are reactive variables that can be used to store and manage state in Angular applications.
  // computed signals are derived from other signals and automatically update when their dependencies change.

  countSignal = signal(0);
  computedSignal = computed(() => this.countSignal() * 2);
  updatedSignal = this.computedSignal()
  displayHeading = false;




  // effect in angular 
  // effect is a function that allows you to run side effects in response to changes in signals.
  // It automatically tracks the signals used within its body and re-runs whenever any of those signals change.

  constructor(private route: Router) {
    effect(() => {
      console.log("Count signal changed: ", this.countSignal())
      console.log("Computed signal changed: ", this.computedSignal())
      if (this.countSignal() > 100) {
        this.displayHeading = true;
      }
    });
  }

  ngOnInit(): void {
    // let name = this.route.snapshot.paramMap.get('name');
    // console.log("dtaa coming from param", name)
  }

  // for loop contextual variables 
  // $count , $index , $first , $last , $even , $odd
  // $count is the total number of items in the array.
  // $index is the current index of the item in the loop.
  // $first is true if the current item is the first item in the loop.
  // $last is true if the current item is the last item in the loop.
  // $even is true if the current index is even.
  // $odd is true if the current index is odd. 

  users = ["sameer", "ali", "sana", "sara", "sami", "samiya",];


  // Two way binding in Angular
  // Two-way binding is a powerful feature in Angular that allows you to synchronize data between the component and the template.
  // It is achieved using the [(ngModel)] directive, which binds a property in the component to an input element in the template.

  studentName = "";


  // Todo task here 
  task = "";
  taskList: { id: string, task: string }[] = [];

  handleAdd() {
    this.taskList.push({ id: this.task, task: this.task })
  }

  red = "red";

  // directives in angular 
  // directive is a class that add additional behavior in angular 
  // ngIf , ngFor , ngStyle , ngSwitch , ngClass

  // Component directive , 
  // Structural directive 
  // Attribute Directive 
  show = false;

  navigateToAbout() {
    this.route.navigate(['about'] , {queryParams: {name: 'sameer'}})
  }
}