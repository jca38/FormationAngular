import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-form-add-client',
  templateUrl: './form-add-client.component.html',
  styleUrls: ['./form-add-client.component.scss']
})
export class FormAddClientComponent implements OnInit {

  // Uniquement pour si on veut pouvoir gérer de l'Edit d'un client sans ce même formulaire..
  @Input() client = new Client();

  @Output() clicked:EventEmitter<Client> = new EventEmitter();

  // Les différents états possibles pour un client
  public states = Object.values(StateClient);

  // Le formulaire
  public form:FormGroup;

  constructor(
    private formBuilder:FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      state : [this.client.state],
      tva : [this.client.tva],
      name : [this.client.name],
      ca : [this.client.ca],
      comment : [this.client.comment]
    });
  }

  public onSubmit():void {
    // On renvoie toutes les valeurs du formulaire dans l'évenement clicked
    this.clicked.emit(this.form.value);
  }
}
