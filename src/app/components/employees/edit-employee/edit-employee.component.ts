import { Employee } from './../../../models/employee.model';
import { EmployeesService } from './../../../services/employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee ={
    id:0,
    name:'',
    email:'',
    phone: 0,
    salary: 0,
    department:''
  };
  constructor(private route:ActivatedRoute, private employeesService:EmployeesService, private router:Router ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
       const id = params.get('id');

       if(id)
       {
          this.employeesService.getEmployee(parseInt(id))
          .subscribe({
            next:(response) =>{
              this.employeeDetails=response;
            }
          });
       }
      }
    })
  }

  updateEmployee(){
    this.employeesService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['employees']);
      }
    });
  }

  deleteEmployee(id:number)
  {
    this.employeesService.deleteEmployee(id)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['employees']);
      }
    });
  }
}
