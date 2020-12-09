import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {

  public clients : Client[];
  public headers:string[];

  public states = Object.values(StateClient);

  constructor(private clientService:ClientService) {
    // On définit les headers de notre tableau d'orders dans la vue
    this.headers = ["Nom", "CA", "TVA", "Commentaire", "Etat"];

    this.clientService.collection.subscribe(data => {
      this.clients = data;
      console.log(this.clients);
    });
  }

  ngOnInit(): void {
  }

  public changeState(client:Client, event):void  {
    console.log(event);
    this.clientService.changeState(client, event.target.value).subscribe((data:Client) =>
    {
      console.log("Before", client.state);
      client.state = data.state;
      console.log("After", client.state);
    });
  }
}
