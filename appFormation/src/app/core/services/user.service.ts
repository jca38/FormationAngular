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

  private pCollection:Observable<User[]>;

  // On récupère variable du fichier environnement
  private url = environment.urlApi;

  constructor(private http:HttpClient) {
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

  public getByUserNamePassword(_username:string, _password:string):Observable<User>{
    return this.http.get<User>(`${this.url}users?username=${_username}&password=${_password}`).pipe(
      map(data => {return new User(data); })
    )
  }
}
