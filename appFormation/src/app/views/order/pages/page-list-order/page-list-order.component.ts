import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from '../../services/order.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  // Titre de la page
  public title:string;
  // Sous-titre de la page
  public subtitle:string;

  // Liste des orders
  public orders: Observable<Order[]>;

  // Headers du tableau des orders
  public headers:string[];

  // Les différents états possibles pour un order
  public states = Object.values(StateOrder);

  // Utilisation du composant bouton générique shared "BtnComponent"
  public btnRoute: BtnI;
  public btnHref: BtnI;
  public btnAction: BtnI;

  // Pour filtrer les orders
  public btnFilterCanceled: BtnI;
  public filtreCanceledActif:Boolean=false;

  constructor(
    private orderService :OrderService
  ) { }

  ngOnInit(): void {
    // On définit les headers de notre tableau d'orders dans la vue
    this.headers = ["Type", "Client", "Nb. jours", "TJM HT", "Total HT", "Total TTC", "Etat"];

    this.title="Orders";
    this.subtitle="Liste des orders";

    this.createButtons();

    this.orders = this.orderService.collection;
  }

  public createButtons():void {
    this.btnRoute = { label:"Add an order", route: "add"};
    this.btnHref = { label:"Go to Google", href: "http://www.google.fr"};
    this.btnAction = { label:"Open popup", action:true };
    this.btnFilterCanceled = { label:"Filtrer les canceled", action: true };
  }

  public changeState(order:Order, event):void  {
    console.log(event);
    this.orderService.changeState(order, event.target.value).subscribe((data:Order) =>
    {
      console.log("Before", order.state);
      order.state = data.state;
      console.log("After", order.state);
    });
  }

  public openPopup():void {
    console.log("Test open popup");
  }

  public filterCanceled():void {
    if (!this.filtreCanceledActif)
    {
      // On filtre QUE sur les orders ayant l'état CANCEL
      this.orders = this.orderService.collection.pipe(
        map(datas => datas.filter(data => data.state === StateOrder.CANCEL).map(filterData => new Order(filterData)))
      );
      //this.orders = this.orderService.getFilterByState(StateOrder.CANCEL);

      this.filtreCanceledActif=true;
    }
    else
    {
      // On annule le filtre, et on revient sur TOUS les orders
      this.orders = this.orderService.collection;
      this.filtreCanceledActif=false;
    }
  }
}
