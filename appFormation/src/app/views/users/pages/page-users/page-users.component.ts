import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.scss']
})
export class PageUsersComponent implements OnInit {

  // Titre de la page
  public title:string;
  // Sous-titre de la page
  public subtitle:string;

  public users : Observable<User[]>;

  public headers:string[];
  public btnAdd: BtnI;

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.title="Users";
    this.subtitle="Liste des users";

    this.btnAdd = { label : "Ajouter utilisateur", route : "add" };

    // On définit les headers de notre tableau d'orders dans la vue
    this.headers = ["Id", "UserName", "Rôle"];

    this.users = this.userService.collection;
  }

}
