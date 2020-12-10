import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-form-add-order',
  templateUrl: './form-add-order.component.html',
  styleUrls: ['./form-add-order.component.scss']
})
export class FormAddOrderComponent implements OnInit {

  // Uniquement pour si on veut pouvoir gérer de l'Edit d'order sans ce même formulaire..
  @Input() order = new Order();

  @Output() clicked:EventEmitter<Order> = new EventEmitter();

  // Les différents états possibles pour un order
  public states = Object.values(StateOrder);

  // Le formulaire
  public form:FormGroup;

  constructor(
    private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      typePresta : [this.order.typePresta],
      client : [this.order.client],
      nbJours : [this.order.nbJours],
      tjmHT : [this.order.tjmHT],
      tva : [this.order.tva],
      state : [this.order.state],
      comment : [this.order.comment]
    });
  }

  public onSubmit():void {
    // On renvoie toutes les valeurs du formulaire dans l'évenement clicked
    this.clicked.emit(this.form.value);
  }

}
