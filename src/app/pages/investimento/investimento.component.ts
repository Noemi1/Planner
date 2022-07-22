import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { PlanejamentoInvestimento } from 'src/app/models/planejamento-investimento.model';
import { PlanejamentoProduto } from 'src/app/models/planejamento-produto.model';
import { InvestimentoService } from 'src/app/services/investimento.service';
import { PDFService } from 'src/app/services/pdf.service';
import { Colors } from 'src/app/utils/colors.enum';
import { Crypto } from 'src/app/utils/crypto';
import { arrowDown, arrowUp } from 'src/app/utils/format';
import { ModoEscuro } from 'src/app/utils/modo-escuro';

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})
export class InvestimentoComponent implements OnInit {

  faArrowRight = faArrowRight;
  faTrash = faTrash;
  loading = false;

  calculos = [
    { id: 0, baixissimo: 50, baixo: 50, moderado: 50, arrojado: 50, superArrojado: 50, hedge: 50, total: 0, tipo: 'Sugestão' },
    { id: 1, baixissimo: 50, baixo: 50, moderado: 50, arrojado: 50, superArrojado: 50, hedge: 50, total: 0, tipo: 'Plano' },
  ];

  investimentos: PlanejamentoInvestimento[] = [];
  produtos: PlanejamentoProduto[] = [];

  ativos = {
    imoveis: 0,
    veiculos: 0,
    outrosBens: 0,
    investimentos: 0,
    total: 0,
  }

  passivos = {
    imoveis: 0,
    veiculos: 0,
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
    {
      titulo: 'Morte Qualquer Causa (MQC)', capitalSegurado: 0, children: [
        { titulo: 'Invetário (Vit.)	São Paulo', capitalSegurado: 0 },
        { titulo: 'Dívidas (Temp. Decresc.)	', capitalSegurado: 0 },
        { titulo: 'Dependentes (Temp. Decresc.)	', capitalSegurado: 0 },
        { titulo: '5 anos de despesa (MQC)	', capitalSegurado: 0 },
      ]
    },
    {
      titulo: 'Diária por Incapacidade Temporária', capitalSegurado: null, children: [
        { titulo: 'por acidente e doença', capitalSegurado: 0 },
        { titulo: 'apenas por acidente', capitalSegurado: 0 },
      ]
    },
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

  modoEscuroAtivado = false;
  patrimonioPorIdade: any;
  patrimonioPorIdade_options: any;

  capitalSegurado: any;
  capitalSegurado_options: any;


  constructor(
    private modoEscuro: ModoEscuro,
    private pdfService: PDFService,
    private investimentoService: InvestimentoService,
    private crypto: Crypto,
    private router: Router
  ) {
    this.dadosSeguroVida.imc = this.calcularIMC(this.dadosSeguroVida);
    this.modoEscuro.getAtivado().subscribe(res => this.modoEscuroAtivado = res);

    this.investimentoService.list_Planejamento_Investimento.subscribe(res => {
      this.investimentos = res;
      console.log(res);
    });
    this.investimentoService.list_Planejamento_Produto.subscribe(res => this.produtos = res);
    this.patrimonioPorIdade = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Atual',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          type: 'bar',
          label: 'Planejado',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }

    this.patrimonioPorIdade_options = {
      plugins: {
        title: {
          display: true,
          text: 'Patrimônio por Idade',
          font: {
            size: 26
          },
          color: Colors.primary
        },
        subtitle: {
          display: true,
          text: 'Planejado x Realidade Atual',
          font: {
            size: 22
          },
          color: Colors.grey
        },
        legend: {
          position: 'top'
        }
      },
    };
    this.capitalSegurado = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Renda Interrompida 0 anos antes',
          data: [39, 52, 36, 47, 14, 55, 74],
        },
        {
          type: 'bar',
          label: 'Capital Segurado',
          data: [74, 65, 87, 19, 25, 25, 25],
        },
        {
          type: 'bar',
          label: 'Planejado',
          data: [28, 48, 40, 19, 86, 27, 90],
        }
      ]
    }

    this.capitalSegurado_options = {
      plugins: {
        title: {
          display: true,
          text: 'Capital Segurado x Evolução Patrimonial',
          font: {
            size: 26
          },
          color: Colors.primary
        },
        legend: {
          position: 'top'
        }
      },
    };
  }

  ngOnInit(): void {
  }
  calcularIMC(obj: any) {
    var imc = obj.peso / (obj.altura ^ 2);
    return imc;
  }
  deleteInvestimento(id: number) {
    this.router.navigate(['investimento', 'remover-investimento', this.crypto.encrypt(id)])
  }
  deleteProduto(id: number) {
    this.router.navigate(['investimento', 'remover-produto', this.crypto.encrypt(id)])
  }
  arrowUp(value: number) {
    return arrowUp(value)
  }
  arrowDown(value: number, allowNegative: boolean = false) {
    return arrowDown(value, allowNegative)
  }
}
