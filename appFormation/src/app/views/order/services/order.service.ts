import { HttpClient } from '@angular/common/http';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderI } from 'src/app/shared/interfaces/order-i';
import { Order } from 'src/app/shared/models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private pCollection:Observable<Order[]>;

  // On récupère variable du fichier environnement
  private url = environment.urlApi;

  constructor(private http:HttpClient) {
    // fait appel au setter set collection..
    this.collection = this.http.get<Order[]>(`${this.url}orders`)
    .pipe(
      map(datas => {          // data est un tableau d'objets JSON anonymes qui représentent des orders
        return datas.map(obj =>{  // obj est un objet JSON anonyme qui représente un order
          return new Order(obj);
        })
      })
    );
   }

   // Getter and Setters

   get collection(): Observable<Order[]> {
     return this.pCollection;
   }

   set collection(col:Observable<Order[]>) {
     this.pCollection = col;
   }

}
