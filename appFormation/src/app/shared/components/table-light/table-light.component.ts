import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {

  // Une collection d'objets d'un certain type d'entité (ex : Order, Client, ...)
  @Input() public collection:any[];

  // Liste des entêtes du tableau pour ce type d'entité
  @Input() public headers:string[];

  // Tableau des propriétés associées à ce type d'entité
  public collectionProps:string[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.collection.length>0)
      // On initialise par introspection des propriétés du 1er objet de la collection, le tableau des propriétés de ce type d'entité
      this.collectionProps = Object.getOwnPropertyNames(this.collection[0]);
  }

  // Pour récupérer la propriété d'un objet (avec la propertyName dynamique)
  public getProperty(obj:any, propertyName:string)
  {
    return (obj[propertyName]).toString();
  }
}
