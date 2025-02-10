import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from './globals';

@Injectable({
  providedIn: 'root'
})
export class DataEntryFetchService {
  private apiUrl = apiUrl
  
  constructor() { }

  async getAllUsers(){
    let res = await fetch(this.apiUrl)
    let resdata = await res.json()
    return resdata
  }
}
