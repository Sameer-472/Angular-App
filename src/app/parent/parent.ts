import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css'
})
export class Parent implements AfterViewInit{
  message: string = "hello from parent"

  parentHandleClick(){
    console.log("clicked parent handle click")
  };

  @ViewChild(Child) childComponent!: Child;

  ngAfterViewInit(): void {
      console.log(this.childComponent.childMessage);
  }
}
