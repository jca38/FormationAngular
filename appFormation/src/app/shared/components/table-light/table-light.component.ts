import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Client } from '../../models/client.model';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class TableLightComponent implements OnInit {

  // Liste des entêtes du tableau pour ce type d'entité
  @Input() public headers:string[];

  constructor() { }

  ngOnInit(): void {
  }
}
