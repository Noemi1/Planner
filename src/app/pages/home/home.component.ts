import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  calculos = [
    { id: 0, baixissimo: 50, baixo: 50, moderado: 50, arrojado: 50, superArrojado: 50, hedge: 50, total: 0, tipo: 'Sugestão' },
    { id: 1, baixissimo: 50, baixo: 50, moderado: 50, arrojado: 50, superArrojado: 50, hedge: 50, total: 0, tipo: 'Plano' },
  ];

  investimento = [
    { tipo: 'Poupança', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Tesouro', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'RF (CDB/LCI/LCA)', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Previdência (VGBL)', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Debêntures/COE', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Fundo RF', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'FII', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'FIM/FIC e afins', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'FIA', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Ações', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Imóveis (Aluguel)', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Dólar/Ouro', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Criptoativos', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Outros', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Reserva de Emergência', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'C.A. Conservador', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'C.A. Moderado', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'C.A. Arrojado', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Mesa Proprietária (You Capital)', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Private Equity Imobiliário', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Private Equity Gado', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Private Equity Usina Solar', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },
    { tipo: 'Previdência em Dólar', id: 0, rentabilidade: 0, tributacao: 0, rentabilidadeLiquida: 0, montanteAtual: 0,  montanteSugerido: 0, planoAcao: 0 },

  ];


  ativos = {
    imoveis: 0,
    veiculos:0,
    outrosBens: 0,
    investimentos: 0,
    total: 0,
  }

  passivos = {
    imoveis: 0,
    veiculos:0,
    cartaoCredito: 0,
    outrasDividas: 0,
    total: 0,
  }

  dependentes = [
    { id: 0, nome: '', gastoAnual: 0, tempo: 0 },
    { id: 0, nome: '', gastoAnual: 0, tempo: 0 },
    { id: 0, nome: '', gastoAnual: 0, tempo: 0 },
  ]

  seguro = [
    { titulo: 'Morte Qualquer Causa (MQC)', capitalSegurado: 0, children: [
        { titulo: 'Invetário (Vit.)	São Paulo', capitalSegurado: 0 },
        { titulo: 'Dívidas (Temp. Decresc.)	', capitalSegurado: 0 },
        { titulo: 'Dependentes (Temp. Decresc.)	', capitalSegurado: 0 },
        { titulo: '5 anos de despesa (MQC)	', capitalSegurado: 0 },
    ] },
    { titulo: 'Diária por Incapacidade Temporária', capitalSegurado: null, children: [
      { titulo: 'por acidente e doença', capitalSegurado: 0 },
      { titulo: 'apenas por acidente', capitalSegurado: 0 },
    ]},
    { titulo: 'Morte Acidental', capitalSegurado: 0, children: null },
    { titulo: 'Assistência Funerária', capitalSegurado: 0, children: null },
    { titulo: 'Responsabilidade Cívil', capitalSegurado: 0, children: null },
    { titulo: 'Prêmio adequado (5% da renda)', capitalSegurado: 0, children: null },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
