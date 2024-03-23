import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { todo } from './todo/todo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class webapiservice implements InMemoryDbService {

  createDb(){
    // const todos=[
    //   // {id:1 ,  work:'Walking' , workstatus:true},
      
    // ]
    const todos=new Array();
    return {todos};
  }
  genId(todos: todo[]): number{
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id))+1:1;
  }

}
