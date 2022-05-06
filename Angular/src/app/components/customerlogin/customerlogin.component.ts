import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      Username:['',Validators.required],
      Password:['',Validators.required],
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signup")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Username === this.loginForm.value.Username && a.Password === this.loginForm.value.Password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['shop'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("Something went wrong!!")
    })

  }

}
