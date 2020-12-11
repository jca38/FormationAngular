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
  @Input() client:Client = new Client();
  @Input() modedetail : boolean = false;

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
      state : [{ value : this.client.state, disabled: this.modedetail }],
      tva : [{ value : this.client.tva, disabled : this.modedetail}, [Validators.required]],
      name : [{ value : this.client.name, disabled : this.modedetail || this.client.id}, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      ca : [{ value : this.client.ca, disabled : this.modedetail }],
      comment : [{ value : this.client.comment, disabled: this.modedetail }]
    });
  }

  public onSubmit():void {
    // On renvoie toutes les valeurs du formulaire dans l'évenement clicked
    this.clicked.emit(this.form.value);
  }
}
