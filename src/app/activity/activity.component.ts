import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities: any;

  constructor( private activityService: ActivityService) { }

  ngOnInit() {
    // Print in Console
    this.activityService.getToDo().subscribe((data) => console.log(data));

    // HTML Display
    this.activityService.getToDo().subscribe((data) => this.activities = data);
  }

}
