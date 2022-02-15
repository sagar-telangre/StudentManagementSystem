import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../srvices/login.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  constructor(private http:HttpClient, private service:LoginService, private router:Router) { }
  users:any;

  ngOnInit(): void {
    let resp=this.http.get("http://localhost:8080/getstudent");
    resp.subscribe((data)=>this.users=data);
  }
delete(enNo:number)
{
 let res= this.service.deleteStudent(enNo);
 res.subscribe((data)=>this.users=data);
 alert("Deleted...");
 this.router.navigate(["/dashboard"]);
}

}
