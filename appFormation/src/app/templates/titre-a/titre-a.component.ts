import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titre-a',
  templateUrl: './titre-a.component.html',
  styleUrls: ['./titre-a.component.scss']
})
export class TitreAComponent implements OnInit {

  @Input() public title:string;
  @Input() public subtitle:string;

  constructor() { }

  ngOnInit(): void {
  }

}
