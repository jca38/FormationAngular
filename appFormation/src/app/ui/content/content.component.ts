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

  public loginlogout():void
  {
    if (localStorage.userConnected === 'true') {
      // déconnexion
      localStorage.removeItem('userConnected');
    }
    else {
      // connexion
      localStorage.userConnected = 'true';
    }
  }
}
