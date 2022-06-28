import { Component, OnInit } from '@angular/core';
import { ModoEscuro } from 'src/app/helpers/modo-escuro';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  modoEscuroAtivado = false;

  constructor(
    private modoEscuro: ModoEscuro
  ) {
    this.modoEscuro.ativado.subscribe(res => this.modoEscuroAtivado = res);
  }

  ngOnInit(): void {
  }

}
