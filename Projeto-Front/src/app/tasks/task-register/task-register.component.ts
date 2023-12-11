import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from '../shared';
import { TasksService } from '../services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-register',
  templateUrl: './task-register.component.html',
  styleUrls: ['./task-register.component.css'],
  
})
export class TaskRegisterComponent implements OnInit {

  @ViewChild('formTask') formTask: NgForm;

  task: Task;

  constructor(
    private taskService: TasksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.task = new Task();
  }

  /**
   * @return void
   * Function to validate form and sent a object task to API to save new task in database
   * and set to task object for use.
   */
  register(): void {
    if (this.formTask.form.valid) {
      this.task.status = false;      
      let date = new Date();
      let dateFormat = ((date.getFullYear() )) + "-" + ((date.getMonth() + 1)) + "-" + date.getDate() + " " + ('0' + date.getHours()).slice(-2) + ":" + ('0' + date.getMinutes()).slice(-2); 
      this.task.datetime = dateFormat
      let task_obj = {
        "task": this.task
      }
      this.taskService.register(task_obj)
      .subscribe({
        next: response => {
          this.router.navigate(["/tarefas"]);
        },
        error: (e) => {}
    })
      
    }
  }

}
