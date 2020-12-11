import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

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

   // Pour faire de l'ADD d'un client
   public add(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.url}clients`, client).pipe(
     map(data => {return new Client(data); })
    )
  }

   // Pour faire de l'UPDATE d'un client
   public update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.url}clients/${client.id}`, client).pipe(
     map(data => {return new Client(data); })
    )
  }

  // Pour faire de le DELETE d'un client
  public delete(id: number):Observable<any> {
    return this.http.delete<Client>(`${this.url}clients/${id}`);
  }

  // ChangeState
  public changeState(client: Client, state: StateClient): Observable<Client> {
   const obj = new Client({...client});
   obj.state = state;
   return this.update(obj);
 }

 // Get with filter
 public getFilterByCALessThan(_ca : number):Observable<Client[]>
 {
   return this.http.get<Client[]>(`${this.url}clients`)
   .pipe(
     map(datas => datas
         .filter(data => data.ca < _ca)
         .map(filtereddata => new Client(filtereddata))
        ));
 }
}
