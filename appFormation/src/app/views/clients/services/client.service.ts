import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private pCollection:Observable<Client[]>;

  // On récupère variable du fichier environnement
  private url = environment.urlApi;

  constructor(private http:HttpClient) {
    // fait appel au setter set collection..
    this.collection = this.http.get<Client[]>(`${this.url}clients`)
    .pipe(
      map(datas => {          // data est un tableau d'objets JSON anonymes qui représentent des clients
        return datas.map(obj =>{  // obj est un objet JSON anonyme qui représente un client
          return new Client(obj);
        })
      })
    );
   }

   // Getter and Setters

   get collection(): Observable<Client[]> {
     return this.pCollection;
   }

   set collection(col:Observable<Client[]>) {
     this.pCollection = col;
   }
}
