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

  constructor(
    private orderService :OrderService
  ) { }

  ngOnInit(): void {
    this.orderService.collection.subscribe(data => {
      this.orders = data;
      console.log(this.orders);
    });
  }

}
