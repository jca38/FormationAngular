import { Component, OnInit } from '@angular/core';
import { faAd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-add',
  templateUrl: './icon-add.component.html',
  styleUrls: ['./icon-add.component.scss']
})
export class IconAddComponent implements OnInit {

  public myIcon = faAd;

  constructor() { }

  ngOnInit(): void {
  }

}
