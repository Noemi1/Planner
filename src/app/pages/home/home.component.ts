import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faArrowRight = faArrowRight;

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

  dadosSeguroVida = {
    altura: 0,
    peso: 0,
    imc: 0,
    estadoCivil: 0,
    dataNascimento: new Date,
    cpf: '',
    rg: '',
    email: '',
  }

  estadoCivil = [
    { id: 0, nome: 'Solteiro' },
    { id: 1, nome: 'Casado' },
    { id: 2, nome: 'Separado' },
    { id: 3, nome: 'Divorciado' },
    { id: 4, nome: 'Viúvo' },
  ];

  carteira = [
    { tipo: 'Atual', rentabilidadeAtual: 0, retornoAnual: 0, retornoMensal: 0, patrimonioMaximo: 0, tempo: 0, },
    { tipo: 'Sugerida', rentabilidadeAtual: 0, retornoAnual: 0, retornoMensal: 0, patrimonioMaximo: 0, tempo: 0, },
    { tipo: 'Diferença', rentabilidadeAtual: 0, retornoAnual: 0, retornoMensal: 0, patrimonioMaximo: 0, tempo: 0, },
  ];

  perfilInvestidor = [
    { id: 0, nome: 'Super Conservador (até 20% do patrimônio em Risco)' },
    { id: 1, nome: 'Conservador (de 20% à 30% do patrimônio em Risco)' },
    { id: 2, nome: 'Moderado (de 30% à 50% do patrimônio em Risco)' },
    { id: 3, nome: 'Arrojado (de 50% à 80% do patrimônio em Risco)' },
    { id: 4, nome: 'Super Arrojado (100% do patrimônio em Risco)' },
  ]

  constructor() {
    this.dadosSeguroVida.imc = this.calcularIMC(this.dadosSeguroVida);
  }

  ngOnInit(): void {
  }

  calcularIMC(obj: any) {
    var imc = obj.peso / (obj.altura^2);
    console.log(imc);
    return imc;
  }

}
