import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';


@Component({
  selector: 'app-form-add-edit-client',
  templateUrl: './form-add-edit-client.component.html',
  styleUrls: ['./form-add-edit-client.component.scss']
})
export class FormAddEditClientComponent implements OnInit {

  // Uniquement utilisé lors du mode Edition d'un client
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
      tva : [this.client.tva, Validators.required],
      name : [this.client.name, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      ca : [this.client.ca],
      comment : [this.client.comment]
    });
  }

  public onSubmit():void {
    // On renvoie toutes les valeurs du formulaire dans l'évenement clicked
    this.clicked.emit(this.form.value);
  }
}
