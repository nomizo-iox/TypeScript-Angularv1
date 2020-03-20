import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const response = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    // printing to the console
    response.subscribe((data) => console.log(data));
    response.subscribe((data) => this.customers = data);
  }

}
