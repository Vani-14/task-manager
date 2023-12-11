import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../shared';

//import { Task, TaskResponse } from '../shared';

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  private readonly BASE_URL = "https://5so3n13iej.execute-api.us-east-1.amazonaws.com/Test/DBManager"

  constructor(
    private http:HttpClient
  ) { }


  /**
   * @return void
   * Function to set default API url
   */
  getAll(): Observable<any> {
    return this.http.get(
      this.BASE_URL
    );
  }

  /**
   * @return void
   * @param task: any
   * Function to send a obj task to save on database
   */
  register(task: any) {
    return this.http.post(
      this.BASE_URL,
      task
    );
  }

  /**
   * @return void
   * @param task: any
   * Function to send a obj task to update on database
   */
  updateTask(task: any) {
    return this.http.put(
      this.BASE_URL,
      task
    )
  }

  /**
   * @return void
   * @param task: any
   * Function to send a obj task to delete on database
   */
  removeTask(task: any) {
    return this.http.delete(
      this.BASE_URL,
      {"body": task}
    )
  }
}
