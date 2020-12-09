import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.scss']
})
export class PageUsersComponent implements OnInit {

  public users : User[];
  public headers:string[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    console.log("test");

    // On définit les headers de notre tableau d'orders dans la vue
    this.headers = ["Id", "UserName", "Rôle"];

    this.userService.collection.subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
