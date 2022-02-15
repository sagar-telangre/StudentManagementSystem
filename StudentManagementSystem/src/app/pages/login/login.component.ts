import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/srvices/login.service';
import { RegisterService } from 'src/app/srvices/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginservice: LoginService, private router: Router) { }
  public user =
    {
      userName: "",
      password: ""
    };
  ngOnInit(): void { }

  formSubmit() {
    console.log(this.user);
    if (this.user.userName == '' || this.user.userName == null) {
      alert("User is required");
      return;
    }
    this.loginservice.login(this.user).subscribe(
      data => {
        //Success
        console.log(data);
        this.router.navigate(['/dashboard']);

      },
      (error: any) => {
        console.log(error);
        console.log("Not verified");

        alert("Bad Credentials...");

      }
    )






  }
}