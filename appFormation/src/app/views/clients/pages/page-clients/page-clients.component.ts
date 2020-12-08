import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {

  public clients : Client[];

  constructor(private clientService:ClientService) {
    this.clientService.collection.subscribe(data => {
      this.clients = data;
      console.log(this.clients);
    });
  }

  ngOnInit(): void {
  }

}
