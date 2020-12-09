import { Directive, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorJours]'
})
export class ColorJoursDirective implements OnChanges {

  // Propriété @input du même nom que notre selector de Directive
  @Input() appColorJours:number;

  // Décorateur pour maj les classes CSS du composant qui utilise notre directive
  @HostBinding('class') className:string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.className = (this.appColorJours <=1 ? "jour" : "jours");
  }
}
