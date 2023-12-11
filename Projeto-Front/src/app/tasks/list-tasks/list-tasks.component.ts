import { Component, OnInit } from '@angular/core';
import { Task, TaskResponse } from '../shared';
import { TasksService } from '../services';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  public tasks: Task[];
  public taskResponse: TaskResponse;

  constructor(
   private tasksService: TasksService
  ) {}
  
  ngOnInit(): void {
    this.listAllTasks();
  }

  /**
   * @return any
   * Function to list all tasks from API
   */
  listAllTasks(): any {
    this.tasksService.getAll()
      .subscribe({
        next: response => {
          this.taskResponse = response
          this.tasks = this.taskResponse['body']
        },
        error: (e) => {}
    })
  }

  /**
   * @return any
   * @param Task
   * Function to update status tasks to API, send a request to update database
   */
  updateStatus(task: Task): void {
    task.status === true ? task.status = false : task.status = true;
    let task_obj = {
      "task": task
    }
    this.tasksService.updateTask(task_obj)
    .subscribe({
      next: response => {
        
      },
      error: (e) => {}
    })
  }

  /**
   * @return void
   * @param id: Number
   * Function to update status tasks to API, set id to send a request to delete task from database, after update task list
   */
  removeTask(id: number) {
    var r = confirm("Deseja remover a tarefa?");
    if (r == true) {
      let task_obj = {
        "id": id.toString()        
      }
      this.tasksService.removeTask(task_obj)
      .subscribe({
        next: response => {
          this.listAllTasks();
        },
        error: (e) => {}
      })
    }
  }

}
