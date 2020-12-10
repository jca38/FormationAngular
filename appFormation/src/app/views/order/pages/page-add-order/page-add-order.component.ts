import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {

  constructor(
    private orderService:OrderService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  addOrder(event:any):void
  {
    console.log(event);
    let order:Order= new Order(event);
    this.orderService.add(order).subscribe((o:Order) => {
      this.router.navigate(['/orders']);
    });
  }

}
