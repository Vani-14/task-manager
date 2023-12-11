import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//import { TaskRequestsService } from './services';
import { TasksService } from './services';
import { ListTasksComponent } from './list-tasks';
import { TaskRegisterComponent } from './task-register';
import { TaskEditComponent } from './task-edit';



@NgModule({
  declarations: [
    ListTasksComponent,
    TaskRegisterComponent,
    TaskEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TasksService,
    //TaskRequestsService
  ]
})
export class TasksModule { }
