import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../user-data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data-entry',
  imports: [CommonModule,ReactiveFormsModule, RouterModule],
  templateUrl: './data-entry.component.html',
  styleUrl: './data-entry.component.css'
})
export class DataEntryComponent {

  userForm: FormGroup
  users: User[] = []
  currentId: number = 0

  constructor(private fb: FormBuilder, private userDataService: UserDataService){
    this.users = userDataService.getAllUsers()
    this.userForm = this.fb.group({
      name: ["sagar", [Validators.required]],
      email: ["sagar@example.com", [Validators.required, Validators.email]],
      password: ["123123",[Validators.required, Validators.minLength(5)]],
      gender: ["male", [Validators.required]],
      role: ["buyer", [Validators.required]]
    })
    console.log(this.userForm.value)
  }
  submitForm(){
    // e.preventDefault()
    if(this.userForm.valid){
      
      console.log(this.userForm.value)
      this.userDataService.addUser(this.userForm.value)
      // this.userForm.reset()
    }
    else{
      console.log(this.userForm.errors)
      console.log("Invalid Form")
    }
  }

  deleteUser(id:number){
    
    if(this.userDataService.deleteUser(id))
    {
      alert("User Deleted")
      this.users = this.userDataService.getAllUsers()
    }
    else{
      alert("User Not Found")
    }
  }
}
