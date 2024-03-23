import { Component } from '@angular/core';
import { todo } from './todo';
import { TodolistService } from '../todolist.service';
import { NgFor , NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule,NgStyle],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  constructor(private todolistservice:TodolistService , private location:Location){}
  l:string='';
  list:todo[]=[];
  ngOnInit():void{
    this.getList();
  }
  getList():void{
    this.todolistservice.gettingdata().subscribe(data=>this.list=data);
    console.log(this.list);
  }
  add(work:string){
    work = work.trim();
    if(!work){
      return 
    }

    this.todolistservice.addWork({work} as todo).subscribe(w=>this.list.push(w));
  }
  delete(work:todo){
    this.list=this.list.filter(w=>w!=work);
    this.todolistservice.deletedata(work.id).subscribe();
  }
  goBack(){
    this.location.back();
  }
  edit(work:todo){
    this.l=work.work;
    this.delete(work);
  }
  getcolor(work:todo):any{
    if(work.workstatus==true){
      return "green";
    }
    else {
      return "red";
    }
  }
  done(work:todo){
    work.workstatus=!work.workstatus;
  }
}
