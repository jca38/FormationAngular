import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.scss']
})
export class PageUsersComponent implements OnInit {

  // Pour récupérer la liste de tous les utilisateurs
  public users : Observable<User[]>;

  // On définit les headers de notre tableau d'orders dans la vue
  public headers:string[] = ["Id", "UserName", "Rôle"];
  public btnAdd: BtnI = { label : "Ajouter utilisateur", route : "add" };

  // L'utilisateur connecté et son rôle
  public userConnecte:User;

  constructor(
    public userService:UserService,
    public route:ActivatedRoute) { }

  ngOnInit(): void {

    // Pour récupérer le user connecté
    this.userService.getById(this.userService.getUserId()).subscribe(data =>{
      // On stocke le user connecté et son rôle
      this.userConnecte = data;

      // Si l'utilisateur authentifié est ADMIN, on affiche tous les utilisateurs
      if (this.userConnecte.role === "ADMIN")
      {
        this.users = this.userService.collection;
      }
      else
      {
        // Si l'utilisateur authentifié n'est pas ADMIN, on n'affiche que lui-même
        this.users = this.userService.collection.pipe(
          map((datas:User[]) => datas.filter((data:User) => data.id == this.userConnecte.id))
        );
      }
    });
  }
}
