import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataEntryFetchService } from '../data-entry-fetch.service';

interface User {
  name: string
  email: string
  password: string
  gender: string
  role: string
}

@Component({
  selector: 'app-data-entry-fetch',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './data-entry-fetch.component.html',
  styleUrl: './data-entry-fetch.component.css'
})
export class DataEntryFetchComponent {
  userForm: FormGroup
  users:User[] = []
  constructor(private formBuilder: FormBuilder, private dataEntryFetchService: DataEntryFetchService){
    this.userForm = this.formBuilder.group({
      name: ["Sample User", [Validators.required]],
      email: ["sample.user@example.com", [Validators.required]],
      password: ["123123", [Validators.required]],
      gender: ["male", [Validators.required]],
      role: ["seller", [Validators.required]]
    })

    this.dataEntryFetchService.getAllUsers().then(data=> {
      this.users=data
      console.log(data)
    })
  }

}
