import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../srvices/login.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  constructor(private loginservice: LoginService, private router: Router) { }
  public student=
  {
       enNo:"",
     studentName:"",
    fatherName:"",
     sirName:"",
     email:"",
     moNo:"",
  };
  ngOnInit(): void {
  }


formSubmit1()
{
  console.log(this.student);
  if (this.student.studentName == '' || this.student.studentName == null)
   {
    alert("User is required");
    return;
  }

    this.loginservice.addStudent(this.student).subscribe(
    data => {
      //Success
      console.log(data);
      alert("Succeess");
      this.router.navigate(["/dashboard"]);

    },
    (error: any) => {
      console.log(error);
      console.log("Not verified");

      alert("Somthing went wrong");

    }
  )

}




}


