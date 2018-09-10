import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  public Employee=[
    {empId:"1001",empName:"Rahul",empSalary:"9000",empDep:"JAVA"},
    {empId:"1002",empName:"Vikash",empSalary:"11000",empDep:"ORAAPS"},
    {empId:"1003",empName:"Uma",empSalary:"12000",empDep:"JAVA"},
    {empId:"1004",empName:"Sachin",empSalary:"11500",empDep:"ORAAPS"},
    {empId:"1005",empName:"Amol",empSalary:"7000",empDep:".NET"},
    {empId:"1006",empName:"Vishal",empSalary:"17000",empDep:"BI"},
    {empId:"1007",empName:"Rajita",empSalary:"21000",empDep:"BI"},
    {empId:"1008",empName:"Neelima",empSalary:"81000",empDep:"TESTING"},
    {empId:"1009",empName:"Daya",empSalary:"1000",empDep:"TESTING"}
  ];

  
  sortId(){
    for(var i=0;i<this.Employee.length;i++){
      for(var j=0;j<this.Employee.length;j++){
      if(this.Employee[i].empId<this.Employee[j].empId){
        var temp=this.Employee[i];
        this.Employee[i]=this.Employee[j];
        this.Employee[j]=temp;
        }
      }
    }
  }


  sortName(){
    for(var i=0;i<this.Employee.length;i++){
      for(var j=0;j<this.Employee.length;j++){
      if(this.Employee[i].empName<this.Employee[j].empName){
        var temp=this.Employee[i];
        this.Employee[i]=this.Employee[j];
        this.Employee[j]=temp;
        }
      }
    }
  }

  sortSalary(){
    for(var i=0;i<this.Employee.length;i++){
      for(var j=0;j<this.Employee.length;j++){
      if(this.Employee[i].empSalary<this.Employee[j].empSalary){
        var temp=this.Employee[i];
        this.Employee[i]=this.Employee[j];
        this.Employee[j]=temp;
        }
      }
    }
  }


  sortDep(){
    for(var i=0;i<this.Employee.length;i++){
      for(var j=0;j<this.Employee.length;j++){
      if(this.Employee[i].empDep<this.Employee[j].empDep){
        var temp=this.Employee[i];
        this.Employee[i]=this.Employee[j];
        this.Employee[j]=temp;
        }
      }
    }
  }
}


  
    
  

