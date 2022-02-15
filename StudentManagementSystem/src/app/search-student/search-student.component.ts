import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../srvices/login.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  constructor(private loginservice:LoginService, private router:Router) { }
public search=
{
  enNo:""
}
  ngOnInit(): void {
  }
  formSubmit1()
  {
    console.log(this.search);
    if (this.search.enNo== '' || this.search.enNo== null)
     {
      alert("ENROLLMENT is required");
      return;
    }
  
      this.loginservice.searchStudent(this.search).subscribe(
      data => {
        //Success
        console.log(data);
        alert("Succeess");
        this.router.navigate(['/showstuden']);
  
      },
      (error: any) => {
        console.log(error);
        console.log("Not verified");
  
        alert("Somthing went wrong");
  
      }
    )
  

  }

}
