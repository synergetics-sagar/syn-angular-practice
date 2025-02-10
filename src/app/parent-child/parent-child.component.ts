import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent-child',
  imports: [CommonModule,ChildComponent],
  templateUrl: './parent-child.component.html',
  styleUrl: './parent-child.component.css'
})
export class ParentChildComponent {
  theme: string = "dark"

  toggleTheme(){
    this.theme = this.theme=="light"?"dark":"light"
    // console.log(this.theme)
  }

  eventFromChild(data: string){
    if(data=="toggle theme from child"){
      this.toggleTheme()
    }
  }
}
