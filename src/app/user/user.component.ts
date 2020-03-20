import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // TypeScript Object from User.TS
  user: User = {
    id: 300,
    name: 'nomizo',
    email: 'nomizo@gmail.com',
    mobile: 8000071000
  };

  constructor() { }

  ngOnInit() {
  }

}
