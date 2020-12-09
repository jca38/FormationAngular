import { parseHostBindings } from '@angular/compiler';
import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorState]'
})
export class ColorStateDirective implements OnChanges {

  // Propriété @input du même nom que notre selector de Directive
  @Input() appColorState:string;

  // Décorateur pour maj les classes CSS du composant qui utilise notre directive
  @HostBinding('class') className:string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.className = this.formatClass(this.appColorState);
  }

  // Renvoie le nom d'une classe CSS state-<state> à partir d'un state de type string
  private formatClass(state:string):string {
   return `state-${state.replace(/\s/g,"").toLocaleLowerCase()}`;
  }
}
