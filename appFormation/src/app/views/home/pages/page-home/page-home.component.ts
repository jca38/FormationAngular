import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const data = new Observable(obs => {
      obs.next(1);
      obs.next(5);
      obs.error(new Error("Erreur détectée"));
      obs.next(8);
      obs.next(9);
      obs.complete();
    });

    data.subscribe({
      next: value => console.log(value),
      error : err => console.log(err),
      complete : () => console.log("finish")
    });
  }
}
