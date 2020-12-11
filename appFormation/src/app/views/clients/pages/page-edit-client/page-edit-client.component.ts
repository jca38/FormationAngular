import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  // Client à éditer
  public clientEdition:Client;

  constructor(
    public route:ActivatedRoute,
    public router:Router,
    public clientService:ClientService
  ) { }

  ngOnInit(): void {
    // On récupère le paramètre id du client dans les params de la route
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.clientService.getById(Number(params.get('id'))).subscribe((_client:Client) => {
          this.clientEdition = _client;
        });
      }
    });
  }

  updateClient(client:Client):void {
    client.id = this.clientEdition.id;
    this.clientService.update(client).subscribe((client:Client) => {
      this.router.navigate(['clients']);
    });
  }
}
