import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services';

  name="";

  constructor(public er:TestService,public el:UsersDataService){
    console.log(this.er.testData());
    this.name=this.er.testData().name;
    console.log(this.er.testData2());
    console.log(this.el.getData());
  }
}
