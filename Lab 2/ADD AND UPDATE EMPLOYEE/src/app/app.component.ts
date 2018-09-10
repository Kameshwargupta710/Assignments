import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  updatemessage:string;
  deletemessage:string;
  message:string;
  updId:string="";
  updName:string="";
  updSalary:string="";
  updDep:string="";
  

  public Employee=[
    {empId:"1001",empName:"Rahul",empSalary:"9000",empDep:"Java"},
    {empId:"1002",empName:"Sachin",empSalary:"10000",empDep:"OraApp"},
    {empId:"1003",empName:"vikash",empSalary:"20000",empDep:"B1"}
  ];

  

  addemployee(id,name,salary,department){
    var emp:string ='{"empId":"'+id+'","empName":"'+name+'","empSalary":"'+salary+'","empDep":"'+department+'"}';
    this.Employee.push(JSON.parse(emp));
    this.message="Data Inserted Successfully";
  }

  updateemployee(id,name,salary,department){
    for(var i=0;i<this.Employee.length;i++){
      if(this.Employee[i].empId==id){
        this.Employee[i].empName=name;
        this.Employee[i].empSalary=salary;
        this.Employee[i].empDep=department;
      }
    }
    this.updatemessage="Data Update Successfully";
  }


  delete(del:string){
    for(var j=0;j<this.Employee.length;j++){
      if(this.Employee[j].empId==del){
        this.Employee.splice(j,1);
      }
    }
    this.deletemessage="Data Deleted Successfully";
  }


  update(upempid:string){
    for(var k=0;k<this.Employee.length;k++){
      if(this.Employee[k].empId==upempid){
        this.updId=this.Employee[k].empId;
        this.updName=this.Employee[k].empName;
        this.updSalary=this.Employee[k].empSalary;
        this.updDep=this.Employee[k].empDep;
      }
    }
  }
}
