import { EmployeesService } from './../../../services/employees.service';
import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest :Employee={
    id:0,
    name:'',
    email:'',
    phone: 0,
    salary: 0,
    department:''

  };
  constructor( private employeesService:EmployeesService , private router:Router) { }

  ngOnInit(): void {

  }
  addEmployee(){
   this.employeesService.addEmployee(this.addEmployeeRequest)
   .subscribe({
    next: (employee)=> {
      this.router.navigate(['employees']);
    }
   });
  }

}
