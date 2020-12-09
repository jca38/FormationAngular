import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table-dark',
  templateUrl: './table-dark.component.html',
  styleUrls: ['./table-dark.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TableDarkComponent implements OnInit {

  // Liste des entêtes du tableau pour ce type d'entité
  @Input() public headers:string[];

  constructor() { }

  ngOnInit(): void {
  }

}
