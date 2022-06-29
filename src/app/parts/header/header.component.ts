import { Component, OnInit } from '@angular/core';
import { ModoEscuro } from 'src/app/helpers/modo-escuro';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modoEscuroAtivado = false;

  constructor(
    private modoEscuro: ModoEscuro
  ) {
    this.modoEscuro.getAtivado().subscribe(res => this.modoEscuroAtivado = res);
  }

  ngOnInit(): void {
  }

}
