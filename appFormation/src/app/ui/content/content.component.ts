import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public open:boolean;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.open=false;
  }

  public switch():void
  {
    this.open=!this.open;
  }

  public logout():void
  {
    // déconnexion
    localStorage.removeItem('userConnected');
    this.redirectTo("//");
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
}
