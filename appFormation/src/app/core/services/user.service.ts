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

  // ID et username de l'utilisateur authentifié
  private userId?:number = null;
  private userName?:string = null;

  // Pour récupérer la liste de tous les utilisateurs
  private pCollection:Observable<User[]>;

  // On récupère variable du fichier environnement
  private url = environment.urlApi;

  constructor(private http:HttpClient) {

    // Le service a pu perdre ses data comme "this.userId" si l'utilisateur a fait ctrl+F5 et donc rechargé le composant donc réinitialisé le service...
    // Dans ce cas comme on a pris soin de stocker le userId authentifié dans le localStorage, on peut le restaurer ici dans le constructeur du service
    if (!this.userId && localStorage.getItem("userId")) {
      this.userId = +localStorage.getItem("userId");
      this.userName = localStorage.getItem("userName");
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

  getUserId():number  {
    return this.userId;
  }

  getUserName():string
  {
    return this.userName;
  }

  setUserId(id?:number)  {
    if (id==null)
    {
      this.userId=null;
      this.userName=null;
      localStorage.removeItem("userId");
    }
    else
    {
      this.userId = id;
      localStorage.userId=id;
      this.getById(id).subscribe((u:User) => {
        this.userName = u.username;
        localStorage.userName=u.username;
      });
    }
  }
}
