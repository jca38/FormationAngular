import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  // Titre de la page
  public title:string;
  // Sous-titre de la page
  public subtitle:string;

  constructor(
    private router:Router,
    private clientsService:ClientService
  ) { }

  ngOnInit(): void {

    this.title="Clients";
    this.subtitle="Ajout d'un client";
  }

  addClient(client: Client):void
  {
    this.clientsService.add(client).subscribe((c:Client) => {
      this.router.navigate(['clients']);
    });
  }

}
