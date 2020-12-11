import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  // Pour gérer l'ouverture ou la fermeture du panel gauche
  public open:boolean;

  constructor(private router:Router,
              public userService:UserService) {
  }

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
    this.userService.setUserId(null);
    this.router.navigate(['/home']);
  }
}
