import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { apiUrl } from './globals';
@Injectable({
  providedIn: 'root'
})
export class DataEntryHttpService {

  private apiUrl = apiUrl

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    // console.log(this.http.get(this.apiUrl))
    return this.http.get<User[]>(this.apiUrl)
  }

  addNewUser(user: User): Observable<any> {
    return this.http.post<User>(this.apiUrl, user)
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
