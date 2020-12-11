import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Utilisateur authentifié
  private user:User = null;

  // Pour savoir si l'utilisateur authentifié est ADMIN ou non
  private isAdmin:Boolean = false;

  // Pour récupérer la liste de tous les utilisateurs
  private pCollection:Observable<User[]>;

  // On récupère variable du fichier environnement
  private url = environment.urlApi;

  constructor(private http:HttpClient) {

    // Le service a pu perdre ses data comme "this.user" si l'utilisateur a fait ctrl+F5 et donc rechargé le composant donc réinitialisé le service...
    // Dans ce cas comme on a pris soin de stocker le user authentifié dans le localStorage, on peut le restaurer ici dans le constructeur du service
    if (!this.user && localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.isAdmin = (this.user.role == "ADMIN");
    }

    // fait appel au setter set collection..
    this.collection = this.http.get<User[]>(`${this.url}users`)
    .pipe(
      map(datas => {          // data est un tableau d'objets JSON anonymes qui représentent des users
        return datas.map(obj =>{  // obj est un objet JSON anonyme qui représente un user
          return new User(obj);
        })
      })
    );
  }

  // Getter and Setters

  get collection(): Observable<User[]> {
    return this.pCollection;
  }

  set collection(col:Observable<User[]>) {
    this.pCollection = col;
  }

  // Renvoie un utilisateur à partir d'un username/password
  public getByUserNamePassword(_username:string, _password:string):Observable<User>{
    return this.http.get<User>(`${this.url}users?username=${_username}&password=${_password}`).pipe(
      map(datas => {return new User(datas[0]); })
    )
  }

  // Renvoie un utilisateur à partir de son ID
  public getById(id:number):Observable<User>{
    return this.http.get<User>(`${this.url}users/${id}`).pipe(
      map(data => {return new User(data); })
    )
  }

  isAdministrateur():Boolean {
    return this.isAdmin;
  }

  getUser():User  {
    return this.user;
  }

  setUser(_user:User)  {
    if (_user==null)
    {
      this.user=null;
      this.isAdmin=false;
      localStorage.removeItem("user");
    }
    else
    {
      this.user = _user;
      this.isAdmin = (this.user.role == "ADMIN");
      localStorage.setItem("user", JSON.stringify(_user));
    }
  }
}
