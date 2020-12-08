import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public open:boolean;

  constructor() { }

  ngOnInit(): void {
    this.open=false;
  }

  public switch():void
  {
    this.open=!this.open;
  }

  public logout():void
  {
    console.log("click");
  }

}
