import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-add-edit-client',
  templateUrl: './page-add-edit-client.component.html',
  styleUrls: ['./page-add-edit-client.component.scss']
})
export class PageAddEditClientComponent implements OnInit {

  // Client à éditer dans le cas d'une édition
  public clientEdition?:Client;

  constructor(
    public route:ActivatedRoute,
    public router:Router,
    public clientsService:ClientService
  ) { }

  ngOnInit(): void {
    // On récupère le paramètre id du client dans les params de la route
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.clientsService.getById(Number(params.get('id'))).subscribe((_client:Client) => {
          this.clientEdition = _client;
        });
      }
    });
  }

  addClient(client: Client):void
  {
    this.clientsService.add(client).subscribe((c:Client) => {
      this.router.navigate(['clients']);
    });
  }

  updateClient(client:Client):void {
    client.id = this.clientEdition.id;
    this.clientsService.update(client).subscribe((client:Client) => {
      this.router.navigate(['clients']);
    });
  }
}
