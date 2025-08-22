import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css'
})
export class LifeCycle implements OnChanges{
  @Input() count=0;

  ngOnChanges(changes: SimpleChanges): void {
      console.log("count change" , this.count)
  }
}
