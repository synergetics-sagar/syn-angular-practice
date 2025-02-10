import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  user: User | undefined

  constructor(private route: ActivatedRoute, private userDataService: UserDataService){
    
  }

  ngOnInit(){
    const id = this.route.snapshot.params['id']
    this.user = this.userDataService.getUserById(id) 
  }

}
