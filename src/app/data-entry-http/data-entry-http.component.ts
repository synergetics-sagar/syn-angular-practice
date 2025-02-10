import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataEntryHttpService } from '../data-entry-http.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../user';


@Component({
  selector: 'app-data-entry-http',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './data-entry-http.component.html',
  styleUrl: './data-entry-http.component.css'
})
export class DataEntryHttpComponent {
  users: User[] = []
  userForm: FormGroup
  constructor(private fb:FormBuilder, private dataEntryHttpService: DataEntryHttpService){
    // Try Validators.Compose()
    this.userForm = this.fb.group({
      name: ["Sample User One", [Validators.required]],
      email: ["sample.user.one@example.com", [Validators.required]],
      password: ["123123", [Validators.required]],
      gender: ["female", [Validators.required]],
      role: ["seller", [Validators.required]]
    })
  }

  ngOnInit(){
    this.getAllUsers()
  }

  handleSubmit(){
    this.dataEntryHttpService.addNewUser(this.userForm.value)
    .subscribe({
      next: res => {
        console.log(res)
        this.getAllUsers()
      },
      error: err => console.log(err),
      complete: () => console.log("User Added Successfully")
    })
    
  }

  getAllUsers(){
    this.dataEntryHttpService.getAllUsers().subscribe({
      next: users => {
        console.log(users)
        this.users = users
      },
      error: err=>console.log(err),
      complete: ()=>console.log("Data Fetched Successfully")
    })
  }

  deleteUser(id: number){
    this.dataEntryHttpService.deleteUser(id)
    .subscribe({
      next: res =>{ 
        console.log(res)
        this.getAllUsers()
      },
      error: err => console.log(err),
      complete: ()=> console.log("User Deleted Successfully")
    })
  }

  
}
