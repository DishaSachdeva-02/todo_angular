import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todo } from './todo/todo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private http:HttpClient) { }
  private url='api/todos';
  httpOptions={headers:new HttpHeaders({'Content-type':'json-description'})};

  gettingdata():Observable<todo[]>{
     return this.http.get<todo[]>(this.url);
  }
  addWork(work:todo):Observable<todo>{
     return this.http.post<todo>(this.url,work,this.httpOptions);
  }
  deletedata(id:number){
    const urlid=`${this.url}/${id}`;
    return this.http.delete<todo>(urlid,this.httpOptions);
  }
  updatedata(work:todo):Observable<any>{
    return this.http.put(this.url,work,this.httpOptions);
  }
}
