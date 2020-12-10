import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titre-b',
  templateUrl: './titre-b.component.html',
  styleUrls: ['./titre-b.component.scss']
})
export class TitreBComponent implements OnInit {

  @Input() public title:string;
  @Input() public subtitle:string;

  constructor() { }

  ngOnInit(): void {
  }

}
