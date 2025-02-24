import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = 0
  message = "Count Cannot be Negative!"

  incrementCount(){
    this.count = this.count+1
  }

  decrementCount(){
    // if(this.count!=0){
    //   this.count = this.count-1
    // }
    this.count = this.count-1

  }
  reset(){
    this.count=0
  }
}
