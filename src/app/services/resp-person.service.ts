import { Injectable } from '@angular/core';
import { IResponsiblePerson } from '../models/models';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RespPersonService {

  constructor(private http: HttpClient) {}

  public getRespPersons():Observable<IResponsiblePerson[]>{
    return this.http.get<IResponsiblePerson[]>('assets/persons.json');
  }
  
}
