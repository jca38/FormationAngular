import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  // Les lignes du tableau
  @Input() public collection:Order[];

  // Liste des entêtes du tableau
  @Input() public headers:string[];

  constructor() { }

  ngOnInit(): void {
  }

}
