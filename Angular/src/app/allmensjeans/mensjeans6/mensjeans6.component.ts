import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensjeans6',
  templateUrl: './mensjeans6.component.html',
  styleUrls: ['./mensjeans6.component.css']
})
export class Mensjeans6Component implements OnInit {
  showImage: boolean;
  constructor() {this.showImage=false; }
  showPic(show:boolean){
    this.showImage= show
  }
  ngOnInit(): void {
  }

}
