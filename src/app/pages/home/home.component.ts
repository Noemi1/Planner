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

  perfilInvestivor = [
    { id: 1, nome: 'Super Conservador (até 20% do patrimônio em risco)' },
    { id: 2, nome: 'Conservador (de 20% à 30% do patrimônio em risco)' },
    { id: 3, nome: 'Moderado (de 30% à 50% do patrimônio em risco)' },
    { id: 4, nome: 'Arrojado (de 50% à 80% do patrimônio em risco)' },
    { id: 5, nome: 'Super Arrojado (100% do patrimônio em risco)' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
