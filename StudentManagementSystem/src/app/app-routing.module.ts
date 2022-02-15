import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './srvices/auth.guard';
import { AddStudentComponent } from './add-student/add-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ShowListComponent } from './show-list/show-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const routes: Routes = [

  {path:"",component:HomeComponent,pathMatch:"full"},

{path:"signup",component:SignupComponent,pathMatch:"full"},

{path:"login", component:LoginComponent,pathMatch:"full"},

{path:"dashboard",component:DashboardComponent,pathMatch:"full"},
{path:"addstudent",component:AddStudentComponent,pathMatch:"full"},
{path:"deletestudent",component:DeleteStudentComponent,pathMatch:"full"},
{path:"searchstudent",component:SearchStudentComponent,pathMatch:"full"},
{path:"updatestudent",component:UpdateStudentComponent,pathMatch:"full"},
{path:"showstudent",component:ShowListComponent,pathMatch:"full"},
{path:"aboutus",component:AboutusComponent,pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
