import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';
import { map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

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

  // Pour récupérer la liste de tous les utilisateurs
  public users : Observable<User[]>;

  // Utilisateur authentifié
  public user:User = JSON.parse(localStorage.getItem('userAuthentifie'));
  public isAdmin:Boolean = (this.user.role == "ADMIN");

  public headers:string[];
  public btnAdd: BtnI;

  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.title="Users";
    this.subtitle="Liste des users";

    this.btnAdd = { label : "Ajouter utilisateur", route : "add" };

    // On définit les headers de notre tableau d'orders dans la vue
    this.headers = ["Id", "UserName", "Rôle"];

    // Si USER on filtre pour n'afficher que son USER
    if (this.user.role === "USER")
    {
      this.users = this.userService.collection.pipe(
        map((datas:User[]) => datas.filter((data:User) => data.id == this.user.id))
      );
    }
    else if (this.user.role === "ADMIN")
    // SI ADMIN ou NON AUTHENTIFIE, on affiche TOUS LES USERS
    {
      this.users = this.userService.collection;
    }
  }

}
