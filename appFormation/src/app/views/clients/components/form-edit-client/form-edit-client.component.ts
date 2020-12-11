import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-form-edit-client',
  templateUrl: './form-edit-client.component.html',
  styleUrls: ['./form-edit-client.component.scss']
})
export class FormEditClientComponent implements OnInit {

  // Uniquement pour si on veut pouvoir gérer de l'Edit d'un client sans ce même formulaire..
  @Input() client = new Client();

  @Output() clicked:EventEmitter<Client> = new EventEmitter();

  // Les différents états possibles pour un client
  public states = Object.values(StateClient);

  // Le formulaire
  public form:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    public route:ActivatedRoute,
    public clientService:ClientService) {
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
