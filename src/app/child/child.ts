import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child implements OnInit {
  @Input() message!: string;
  @Input() parentHandleClick!: ()=> void;

  childMessage:string = "This data is coming from child"

  ngOnInit(): void {
    console.log("message value", this.message)
  }

  handleClick(){
    this.parentHandleClick()
  }
}
