import { HttpClientXsrfModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  // Liste des clients
  public clients : Observable<Client[]>;

  // Headers du tableau des clients
  public headers:string[];

  public btnAdd:BtnI;

  // Les différents états possibles pour un client
  public states = Object.values(StateClient);

   // Utilisation du composant bouton générique shared "BtnComponent"
  public btnFilterCA: BtnI;
  // Pour filtrer les clients
  public filtreClientsActif:Boolean=false;

  constructor(
    private clientService:ClientService,
    public route:ActivatedRoute) {
    // On définit les headers de notre tableau d'orders dans la vue
    this.headers = ["Actions", "Nom", "CA", "TVA", "Commentaire", "Etat", "Total TTC"];

    this.btnAdd = { label : "Ajout client" , "route" : "add" };

    this.btnFilterCA = { label:"", action: true };

    this.clients = this.clientService.collection;
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
      this.clients = this.clientService.getFilterByCALessThan(100000);
      this.filtreClientsActif=true;
      this.btnFilterCA.label="Réinitialiser";
    }
    else
    {
      // On annule le filtre, et on revient sur TOUS les clients
      this.clients = this.clientService.collection;
      this.filtreClientsActif=false;
      this.btnFilterCA.label="";
    }
  }

  public deleteClient(id:number)
  {
    this.clientService.delete(id).subscribe(()=> {
      this.clients = this.clients.pipe(map(datas => datas.filter(data => data.id!=id)));
    });
  }
}
