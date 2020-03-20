import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ProfileComponent} from '../profile/profile.component';
import {HelpdeskComponent} from '../helpdesk/helpdesk.component';
import {LearningComponent} from '../learning/learning.component';
import {PayrollComponent} from '../payroll/payroll.component';
import {TechComponent} from '../tech/tech.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'hd', component: HelpdeskComponent },
  { path: 'learning', component: LearningComponent },
  { path: 'learning/:technology', component: TechComponent },
  { path: 'payroll', component: PayrollComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
