import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-businesslogin',
  templateUrl: './businesslogin.component.html',
  styleUrls: ['./businesslogin.component.css']
})
export class BusinessloginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(b: NgForm){
    const registerObserver = {
      next: x => console.log('User created'),
      error: err => console.log(err)
    };
    this.authService.register(b.value).subscribe(registerObserver);
  }

}