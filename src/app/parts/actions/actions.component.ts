import { Component, OnInit } from '@angular/core';
import { faChartColumn, faChartLine, faHome, faRotate } from '@fortawesome/free-solid-svg-icons';
import { ActionsService } from 'src/app/helpers/actions';
import { ModoEscuro } from 'src/app/helpers/modo-escuro';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  faHome = faHome;
  faChartLine = faChartColumn;
  faRotate = faRotate;

  open = false;
  modoEscuroAtivado = false;

  constructor(
    private actions: ActionsService,
    private modoEscuro: ModoEscuro,
  ) {
    this.actions.open.subscribe(res => this.open = res);
    this.modoEscuro.ativado.subscribe(res => this.modoEscuroAtivado = res);
  }

  ngOnInit(): void {
  }

  toggle() {
    this.actions.toggle();
  }

  toggleModoEscuro() {
    this.modoEscuro.toggle();
  }

}
