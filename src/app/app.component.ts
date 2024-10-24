import { Component, OnInit, inject } from '@angular/core';
import { RespPersonService } from './services/resp-person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'to-do-list';
 private respPersonService=inject(RespPersonService);

 public ngOnInit(): void {
    this.respPersonService.getRespPersons().subscribe((d)=>console.log(d))
  }

}
