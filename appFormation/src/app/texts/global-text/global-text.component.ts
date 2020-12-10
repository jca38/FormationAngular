import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-global-text',
  templateUrl: './global-text.component.html',
  styleUrls: ['./global-text.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class GlobalTextComponent implements OnInit {

  @Input() public page:boolean;
  @Input() public pageClient:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
