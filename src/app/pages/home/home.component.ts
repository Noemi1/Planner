import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values = [
    { id: 0, baixissimo: 50, baixo: 50, moderado: 50, arrojado: 50, superArrojado: 50, hedge: 50, total: 0, tipo: 'Sugestão' },
    { id: 1, baixissimo: 50, baixo: 50, moderado: 50, arrojado: 50, superArrojado: 50, hedge: 50, total: 0, tipo: 'Plano' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
