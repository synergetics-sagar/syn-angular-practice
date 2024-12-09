import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  users:User[] = []
  currentId:number = 0

  constructor() { }
 
  addUser(user: User){
    const newUser = {...user, id: this.currentId++}
    this.users.push(newUser)
  }

  getUserById(id: number){
    return this.users.find(user=>user.id==id) || undefined
  }

  getAllUsers(){
    return this.users
  }

  deleteUser(id:number){
    if(this.users.find(user=>user.id==id)){
      this.users = this.users.filter(user=>user.id!=id)
      return true
    }
    return false
  }
}
