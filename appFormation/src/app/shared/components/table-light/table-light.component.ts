import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  // Les lignes du tableau
  @Input() public collection:any[];

  // Liste des entêtes du tableau
  @Input() public headers:string[];

  public collectionProps:string[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.collection.length>0)
      this.collectionProps = Object.getOwnPropertyNames(this.collection[0]);
  }

  public getProperty(obj:any, propertyName:string)
  {
    return (obj[propertyName]).toString();
  }
}
