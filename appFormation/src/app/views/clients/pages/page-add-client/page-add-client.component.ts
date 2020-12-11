import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  constructor(
    private router:Router,
    private clientsService:ClientService,
    public route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  addClient(client: Client):void
  {
    this.clientsService.add(client).subscribe((c:Client) => {
      this.router.navigate(['clients']);
    });
  }

}
