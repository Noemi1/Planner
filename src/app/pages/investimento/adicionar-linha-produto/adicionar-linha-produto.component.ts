import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Investimento, investimentos } from 'src/app/models/investimento.model';
import { PlanejamentoInvestimentoRequest } from 'src/app/models/planejamento-investimento.model';
import { PlanejamentoProdutoRequest } from 'src/app/models/planejamento-produto.model';
import { Produto, produtos } from 'src/app/models/produto.model';
import { tributacao, Tributacao } from 'src/app/models/tributacao.model';
import { InvestimentoService } from 'src/app/services/investimento.service';
import { arrowDown, arrowUp, stringToDecimal } from 'src/app/utils/format';
import { ModalOpen } from 'src/app/utils/modal-open';

@Component({
  selector: 'app-adicionar-linha-produto',
  templateUrl: './adicionar-linha-produto.component.html',
  styleUrls: ['./adicionar-linha-produto.component.css']
})
export class AdicionarLinhaProdutoComponent implements OnInit {
  faTimes = faTimes;
	modalOpen = false;
	objeto: PlanejamentoProdutoRequest = new PlanejamentoProdutoRequest;
	erro: any[] = [];
	loading = false;

	tributacoes: Tributacao[] = tributacao;
	produtos: Produto[] = produtos;
 
	constructor(
		private router: Router,
		private toastr: ToastrService,
		private modal: ModalOpen,
		private produtoService: InvestimentoService,
	) {
		this.modal.getOpen().subscribe(res => {
			this.modalOpen = res;
		});

		this.produtoService.list_Produto.subscribe(res => {
			res.sort((x, y) => x.id - y.id);
			this.produtos = res;
		})

	}

	ngOnInit(): void {
		setTimeout(() => {
			this.modal.setOpen(true);
		}, 200);
	}

	voltar() {
		this.modal.setOpen(false);
		setTimeout(() => {
			this.router.navigate(['..']);
		}, 200);
	}

	send(form: NgForm) {
		this.loading = true;
		this.erro = [];

    this.objeto.rentabilidade = stringToDecimal(this.objeto.rentabilidade.toString());
    this.objeto.montanteAtual = stringToDecimal(this.objeto.montanteAtual.toString());

		this.produtoService.createProduto(this.objeto);
		this.voltar();
		this.toastr.success('Linha adicionada');
		this.loading = false;
	}	
  
  arrowUp(value: number) {
		return arrowUp(value)
	}

	arrowDown(value: number, allowNegative: boolean = false) {
		return arrowDown(value, allowNegative)
	}


}
