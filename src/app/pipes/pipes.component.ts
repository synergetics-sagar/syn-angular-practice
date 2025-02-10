import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DiscountPipe } from '../discount.pipe';
import { DataEntryHttpService } from '../data-entry-http.service';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, DiscountPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  product= {
    name: "macbook pro m3",
    description: "macbook pro features the most advanced line-up of chips ever built for a pro laptop",
    price: 200000,  
    dealer: "AppleStore@example.com",
    availability: "01-30-2025"
  }

  asyncPipeExampleTemplate = `<ul *ngFor="let user of users$ | async">
    <li>{{user.name}}</li>
</ul>`

  users$:Observable<User[]> | undefined

  constructor(private dataEntryHttpService: DataEntryHttpService){
  }

  ngOnInit(){
    this.users$ = this.dataEntryHttpService.getAllUsers()
  }
}
