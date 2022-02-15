import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/srvices/register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  exform:any
  constructor(private registerService:RegisterService,private snack:MatSnackBar,private router:Router,private formbuilder:FormBuilder){}


  public Register=
  {
    
    name:' ',
    
    email:' ',
    userName:' ',
    password:'',
  };
  
  ngOnInit(): void {
    
this.exform=new FormGroup({
  "name":new FormControl('',Validators.required),
  "email":new FormControl('',Validators.required),
  "username":new FormControl('',Validators.required),
  "password":new FormControl('',Validators.required),



});



  }

  formSubmit()
  {
  console.log(this.Register);
  if(this.Register.userName==' '|| this.Register.userName==null)
  {
   // alert("User is required");
   this.snack.open("Username is required !!"," ",
   {
     duration:2000,horizontalPosition:"left"
   });
   
    return;
  }

  this.registerService.addUser(this.Register).subscribe(
(data)=>
{
  //success
  console.log(data);
  alert("suceess");
   this.router.navigate(['login']);
  
},

(error)=>
{
  console.log(error);
  
  alert('Somthing went wrong');
  
}

  )
  }
  

}
