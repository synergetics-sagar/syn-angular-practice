import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() theme?: string
  @Output() childEvent = new EventEmitter<string>()

  count:number = 0

  constructor(){
    console.log("This is Constructor")
  }

  ngOnChanges(changes: SimpleChange){
    console.log("ngOnChanges",changes)
  }
  
  ngOnInit(){
    console.log("ngOnInit")
  }
  
  ngDoCheck(){
    console.log("ngDoCheck")
  }

  ngOnDestroy(){
    console.log("Component about to be destroyed")
  }

  toggleThemeFromChild(){
    this.childEvent.emit("toggle theme from child")
  }

  increment(){
    this.count++
  }
}
