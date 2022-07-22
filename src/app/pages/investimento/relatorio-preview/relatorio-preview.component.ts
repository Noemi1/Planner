import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalOpen } from 'src/app/utils/modal-open';

@Component({
  selector: 'app-relatorio-preview',
  templateUrl: './relatorio-preview.component.html',
  styleUrls: ['./relatorio-preview.component.css']
})
export class RelatorioPreviewComponent implements OnInit {

  modalOpen = false;
  constructor(
    private modal: ModalOpen,
    private router: Router,
  ) {
    this.modal.getOpen().subscribe(res => {
      this.modalOpen = res;
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.modal.setOpen(true);
    }, 200);
  }

  voltar() {
    this.modal.setOpen(false);
    setTimeout(() => {
      this.router.navigate(['pravaler', 'cancelamento']);
    }, 200);
  }

}
