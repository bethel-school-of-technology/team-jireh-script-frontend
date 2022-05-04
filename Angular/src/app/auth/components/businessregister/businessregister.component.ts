import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth/services/auth.service';
@Component({
  selector: 'app-businessregister',
  templateUrl: './businessregister.component.html',
  styleUrls: ['./businessregister.component.css']
})
export class BusinessregisterComponent implements OnInit {
  authService: any;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(b: NgForm){
    const registerObserver = {
      next: x => console.log('User created'),
      error: err => console.log(err)
    };
    this.authService.register(b.value).subscribe(registerObserver);
  }

}
