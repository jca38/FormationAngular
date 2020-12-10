import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public open:boolean;

  constructor(private router:Router,
              public userService:UserService) { }

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
    this.userService.setUser(null);
    this.router.navigate(['/home']);
  }
}
