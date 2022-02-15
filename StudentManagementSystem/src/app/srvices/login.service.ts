import { HttpClient } from '@angular/common/http';
import { LocalizedString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private baseUrl="http://localhost:8080";
  constructor(private http:HttpClient, private router:Router)
  {}   


  public login(user:any):Observable<any>
  {
    return this.http.post<any>(`${baseUrl}/loginuser`,user);
  }

public addStudent(student:any):Observable<any>
{
  return this.http.post<any>(`${baseUrl}/addstudent`,student)
}
public deleteStudent(enNo:number)
{
  return this.http.delete("http://localhost:8080/delete/"+enNo);
}
public updateStudent(add:any):Observable<any>
{
  return this.http.post<any>(`${baseUrl}/updatestudent`,add)
}
public searchStudent(search:any):Observable<any>
{
  return this.http.get<any>(`${baseUrl}/{enNo}`,search)
}
}




