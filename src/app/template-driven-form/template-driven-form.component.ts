import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface TdForm {
  name: string, 
  email: string,
  password: string
}


@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  model : TdForm = {name: "", email: "", password: ""}
  onSubmit(){
    console.log(this.model)
  }
}
