import { Component, OnInit } from '@angular/core';
import { ModoEscuro } from './helpers/modo-escuro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  modoEscuroAtivado = false;

  constructor(
    private modoEscuro: ModoEscuro
  ) {
    this.modoEscuro.ativado.subscribe(res => this.modoEscuroAtivado = res);
  }

  ngOnInit(): void {
    
  }
}
