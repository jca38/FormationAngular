import { Directive, Input, HostBinding, SimpleChanges } from '@angular/core';
import { RoleUser } from '../enums/role-user.enum';

@Directive({
  selector: '[appColorRole]'
})
export class ColorRoleDirective {

  // Propriété @input du même nom que notre selector de Directive
  @Input() appColorRole:string;

  // Décorateur pour maj les classes CSS du composant qui utilise notre directive
  @HostBinding('class') className:string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.className = this.formatClass(this.appColorRole);
  }

  // Renvoie le nom d'une classe CSS state-<state> à partir d'un state de type string
  private formatClass(role:string):string {
    return (role===RoleUser.ADMIN ? `displayAdmin` : `displayUser`);
  }
}
