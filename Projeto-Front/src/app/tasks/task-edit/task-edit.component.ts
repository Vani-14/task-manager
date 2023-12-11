import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from '../services';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../shared';


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit{

  @ViewChild('formTask') formTask: NgForm;

  task: Task;

  constructor(
    private taskService: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {};

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.task = new Task();
    this.getById(id);
  }

  /**
   * @return void
   * @param id: Number
   * Function to return a task by id param task, this send to API a request to collect updated tasks
   * and set to task object for use.
   */
  getById(id: number) {
    this.taskService.getAll()
      .subscribe({
        next: response => {
          let taskResponse = response;
          let tasks = taskResponse['body'];
          tasks.forEach(taskObj => {
            if(taskObj.id.toString() === id.toString()) {
              this.task = taskObj;
            } 
          });         
        },
        error: (e) => {}
    })
  }

  /**
   * @return void
   * @param id: Number
   * Function to return a task by id param task, this send to API a request to collect updated tasks
   * and set to task object for use.
   */
  updateTask() {
    console.log(this.task)
    let taskObj = {
      "task": this.task
  }
    this.taskService.updateTask(taskObj)
      .subscribe({
        next: response => {
          this.router.navigate(["/tarefas"]);
        },
        error: (e) => {}
    });
  }
}
