import { EmployeesService } from './../../../services/employees.service';
import { Employee } from './../../../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];
  constructor( private employeesService:EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployee()
    .subscribe({
      next:(employees)=>{
      this.employees=employees;
      },
      error:(Response)=>{
        console.log(Response);
      }
    })
  }

}
