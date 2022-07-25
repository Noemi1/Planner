import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PrincipaisObjetivos } from 'src/app/models/objetivos.model';
import { InvestimentoService } from 'src/app/services/investimento.service';
import { Crypto } from 'src/app/utils/crypto';
import { ModalOpen } from 'src/app/utils/modal-open';

@Component({
  selector: 'app-delete-linha-principais-objetivos',
  templateUrl: './delete-linha-principais-objetivos.component.html',
  styleUrls: ['./delete-linha-principais-objetivos.component.css']
})
export class DeleteLinhaPrincipaisObjetivosComponent implements OnInit {


  modalOpen = false;
  objeto: PrincipaisObjetivos = new PrincipaisObjetivos;
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
      var obj = this.investimentoService.list_PrincipaisObjetivos.value.find(x => x.id == this.objeto.id);
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
    this.investimentoService.deleteObjetivo(this.objeto).subscribe(
      res => {
        this.voltar();
      },
      err => {
        this.toastr.error(err);
      }
    ).add(() => this.loading = false);
  }
}
