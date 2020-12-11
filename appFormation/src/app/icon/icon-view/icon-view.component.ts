import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-view',
  templateUrl: './icon-view.component.html',
  styleUrls: ['./icon-view.component.scss']
})
export class IconViewComponent implements OnInit {

  public myIcon = faEye;

  constructor() { }

  ngOnInit(): void {
  }

}
