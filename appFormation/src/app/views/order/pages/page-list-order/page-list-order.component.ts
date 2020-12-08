import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-list-order',
  templateUrl: './page-list-order.component.html',
  styleUrls: ['./page-list-order.component.scss']
})
export class PageListOrderComponent implements OnInit {

  public orders : Order[];
  public headers:string[];

  constructor(
    private orderService :OrderService
  ) { }

  ngOnInit(): void {
    // On définit les headers de notre tableau d'orders dans la vue
    this.headers = ["Type", "Client", "Nb. jours", "TJM HT", "Total HT", "Total TTC", "Etat"];

    this.orderService.collection.subscribe(data => {
      this.orders = data;
      console.log(this.orders);
    });
  }

}
