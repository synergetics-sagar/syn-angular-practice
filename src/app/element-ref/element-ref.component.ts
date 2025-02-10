import { Component } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  imports: [],
  templateUrl: './element-ref.component.html',
  styleUrl: './element-ref.component.css'
})
export class ElementRefComponent {

  handleButtonClick(nameRef: HTMLInputElement){
    console.log(nameRef.value)
    nameRef.style.backgroundColor = "black"
    nameRef.style.color= "white"
    nameRef.value = ""
  }
  
}
