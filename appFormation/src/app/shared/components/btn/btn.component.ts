import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() label:string; // Titre du bouton à créér
  @Input() route:string; // Route de redirection (facultative)
  @Input() href:string;  // Pour rediriger à l'exterieur de l'appli (facultatif)
  @Input() action:boolean;

  @Output() clicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public doAction():void {
    this.clicked.emit();
  }

}
