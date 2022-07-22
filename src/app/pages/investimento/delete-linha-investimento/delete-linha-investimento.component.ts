import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlanejamentoInvestimento } from 'src/app/models/planejamento-investimento.model';
import { InvestimentoService } from 'src/app/services/investimento.service';
import { Crypto } from 'src/app/utils/crypto';
import { ModalOpen } from 'src/app/utils/modal-open';

@Component({
  selector: 'app-delete-linha-investimento',
  templateUrl: './delete-linha-investimento.component.html',
  styleUrls: ['./delete-linha-investimento.component.css']
})
export class DeleteLinhaInvestimentoComponent implements OnInit {


  modalOpen = false;
  objeto: PlanejamentoInvestimento = new PlanejamentoInvestimento;
  erro: any[] = [];
  loading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private modal: ModalOpen,
    private crypto: Crypto,
    private investimentoService: InvestimentoService,
  ) {
    this.modal.getOpen().subscribe(res => this.modalOpen = res);

    if (this.route.snapshot.params['id']) {
      this.objeto.id = this.crypto.decrypt(this.route.snapshot.params['id']);
      var obj = this.investimentoService.list_Planejamento_Investimento.value.find(x => x.id == this.objeto.id);
      if (!obj) {
        this.voltar();
        this.toastr.error('Não é possível realizar essa operação');
      } else {
        this.objeto = obj;
      }
    } else {
      this.toastr.error('Não é possível realizar essa operação');
      this.voltar();
    }
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


  delete() {
    this.loading = true;
    this.investimentoService.deleteInvestimento(this.objeto).subscribe(
      res => {
        this.voltar();
      },
      err => {
        this.toastr.error(err);
      }
    ).add(() => this.loading = false);
  }
}
