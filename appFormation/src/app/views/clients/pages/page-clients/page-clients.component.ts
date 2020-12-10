import { HttpClientXsrfModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
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

  public btnFilterCA: BtnI;
  public filtreClientsActif:Boolean=false;

  constructor(private clientService:ClientService) {
    // On définit les headers de notre tableau d'orders dans la vue
    this.headers = ["Nom", "CA", "TVA", "Commentaire", "Etat"];

    this.btnFilterCA = { label:"", action: true };

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

  public filterCALessThan100000():void {
    if (!this.filtreClientsActif)
    {
      // On filtre QUE sur les client ayant un CA<100.000€
      this.clientService.getFilterByCALessThan(100000).subscribe((clientsFiltered:Client[]) => {
        this.clients = clientsFiltered;
        this.filtreClientsActif=true;
        this.btnFilterCA.label="Réinitialiser";
      });
    }
    else
    {
      // On annule le filtre, et on revient sur TOUS les clients
      this.clientService.collection.subscribe((clients:Client[]) => {
        this.clients = clients;
        this.filtreClientsActif=false;
        this.btnFilterCA.label="";
      });
    }
  }
}
