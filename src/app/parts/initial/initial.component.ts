import { Component, OnInit } from '@angular/core';
import { ModoEscuro } from 'src/app/helpers/modo-escuro';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  modoEscuroAtivado = false;

  constructor(
    private modoEscuro: ModoEscuro
  ) {
    this.modoEscuro.getAtivado().subscribe(res => this.modoEscuroAtivado = res);
  }

  ngOnInit(): void {

  }


}
