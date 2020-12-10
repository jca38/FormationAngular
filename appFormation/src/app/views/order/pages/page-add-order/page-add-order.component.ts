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

  // Titre de la page
  public title:string;
  // Sous-titre de la page
  public subtitle:string;

  constructor(
    private orderService:OrderService,
    private router:Router
    ) { }

  ngOnInit(): void {

    this.title="Orders";
    this.subtitle="Ajout d'un order";
  }

  addOrder(order: Order):void
  {
    this.orderService.add(order).subscribe((o:Order) => {
      this.router.navigate(['/orders']);
    });
  }

}
