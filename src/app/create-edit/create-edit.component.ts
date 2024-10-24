
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IResponsiblePerson, ITodo, TodoStatus } from '../models/models';
import { RespPersonService } from '../services/resp-person.service';
import { Observable } from 'rxjs';
import { ToDoService } from '../services/todo.service';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {

  public id?: number;
  public invalidForm = false;
  public persons: Observable<IResponsiblePerson[]> = this.respPersonService.getRespPersons();
  public form = this.fb.group({
    title: ['', Validators.required],
    deadline: ['', Validators.required],
    responsiblePersonName: ['', Validators.required]
  });

  private curentToDo!: ITodo;  

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private respPersonService: RespPersonService,
    private toDoService: ToDoService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params?.['id'];
    if (this.id) {
      this.curentToDo = this.toDoService.getTodo(this.id)!;  
      this.form.patchValue(this.curentToDo);
    }
  }

  public onsubmit() {
    console.log(this.form.value);  
    if (this.form.valid) {
      const todo: ITodo = {
        id: this.curentToDo?.id ?? Math.ceil(Math.random() * 1000000),
        status: this.curentToDo?.status ?? TodoStatus.pending,
        createDate: this.curentToDo?.createDate ?? new Date().toISOString().split('T')[0],
        title: this.form.value.title as string,  
        deadline: this.form.value.deadline as string,  
        responsiblePersonName: this.form.value.responsiblePersonName as string  
      };

      this.id ? this.toDoService.updateTodo(todo) : this.toDoService.addTodo(todo);
      this.close();
    } else {
      this.invalidForm = true;
    }
  }

  public close() {
    this.form.reset();
    this.router.navigate(['']);
  }
}
