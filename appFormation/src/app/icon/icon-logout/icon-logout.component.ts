import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-logout',
  templateUrl: './icon-logout.component.html',
  styleUrls: ['./icon-logout.component.scss']
})
export class IconLogoutComponent implements OnInit {

  public myIcon = faPowerOff;

  constructor() { }

  ngOnInit(): void {
  }

}
