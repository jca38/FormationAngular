import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  public orders: Observable<Order[]>;
  public headers:string[];
  public states = Object.values(StateOrder);

  // Pour tester le composant générique shared "BtnComponent"
  public btnRoute: BtnI;
  public btnHref: BtnI;
  public btnAction: BtnI;

  public btnFilterCanceled: BtnI;
  public filtreCanceledActif:Boolean=false;

  constructor(
    private orderService :OrderService
  ) { }

  ngOnInit(): void {
    // On définit les headers de notre tableau d'orders dans la vue
    this.headers = ["Type", "Client", "Nb. jours", "TJM HT", "Total HT", "Total TTC", "Etat"];

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
      this.orders = this.orderService.getFilterByState(StateOrder.CANCEL);
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
