import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table-stripped',
  templateUrl: './table-stripped.component.html',
  styleUrls: ['./table-stripped.component.scss'],
  encapsulation:ViewEncapsulation.None

})
export class TableStrippedComponent implements OnInit {

  // Liste des entêtes du tableau pour ce type d'entité
  @Input() public headers:string[];

  constructor() { }

  ngOnInit(): void {
  }

}
