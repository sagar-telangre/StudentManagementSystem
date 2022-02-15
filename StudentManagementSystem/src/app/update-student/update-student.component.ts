import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../srvices/login.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  public add=
  {
    enNo:"",
    studentName:"",
   fatherName:"",
    sirName:"",
    email:"",
    moNo:"",
  }
  formSubmit()
  {
    console.log(this.add);
    if (this.add.studentName == '' || this.add.studentName == null)
     {
      alert("User is required");
      return;
    }
  
      this.loginservice.addStudent(this.add).subscribe(
      data => {
        //Success
        console.log(data);
        alert("Succeess");
  
      },
      (error: any) => {
        console.log(error);
        console.log("Not verified");
  
        alert("Somthing went wrong");
  
      }
    )
  
  }
  
  
  

  
}
