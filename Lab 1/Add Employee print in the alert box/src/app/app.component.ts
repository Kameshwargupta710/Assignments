import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public id;
  public name;
  public salary;
  public department;

  constructor() { }



  addemployee(id,name,salary,department):void{
  alert(this.id+" "+this.name+" "+this.salary+" "+this.department);

}
}
