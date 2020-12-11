import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router:Router,
    public route:ActivatedRoute
    ) { }

  ngOnInit(): void {

    // this.route.paramMap.subscribe(params => {
    //   if (params.get('id')) {
    //     ....
    //   }
    // });
  }

  addOrder(order: Order):void
  {
    this.orderService.add(order).subscribe((o:Order) => {
      this.router.navigate(['orders']);
    });
  }

}
