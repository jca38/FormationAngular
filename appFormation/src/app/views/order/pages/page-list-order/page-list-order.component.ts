import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from '../../services/order.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  // Liste des orders
  public orders: Observable<Order[]>;

  // Headers du tableau des orders
  public headers:string[] = ["Type", "Client", "Nb. jours", "TJM HT", "Total HT", "Total TTC", "Etat"];

  // Les différents états possibles pour un order
  public states = Object.values(StateOrder);

  // Utilisation du composant bouton générique shared "BtnComponent"
  public btnRoute: BtnI           = { label:"Add an order", route: "add"};
  public btnHref: BtnI            = { label:"Go to Google", href: "http://www.google.fr"};
  public btnAction: BtnI          = { label:"Open popup", action:true };
  public btnFilterCanceled: BtnI  = { label:"Filtrer les canceled", action: true };
  public filtreCanceledActif:Boolean=false; // Pour filter les orders canceled uniquement

  constructor(
    private orderService :OrderService,
    public route:ActivatedRoute) { }

  ngOnInit(): void {
    this.orders = this.orderService.collection;
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
