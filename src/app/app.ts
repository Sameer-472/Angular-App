import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Login, SignUp, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
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
}
