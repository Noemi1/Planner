import { Component, OnInit } from '@angular/core';
import { faIdCard, faKey, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Header } from 'src/app/utils/header';
import { ModoEscuro } from 'src/app/utils/modo-escuro';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faSignOut = faSignOut;
  faIdCard = faIdCard;
  faKey = faKey;
  modoEscuroAtivado = false;
  userLogadoOpen = false;

  constructor(
    private modoEscuro: ModoEscuro,
    private accountService: AccountService,
    private header: Header
  ) {
    this.modoEscuro.getAtivado().subscribe(res => this.modoEscuroAtivado = res);
    this.header.menuHeaderOpen.subscribe(res => this.userLogadoOpen = res);
  }

  ngOnInit(): void {
  }
  toggleMenuHeader(): void {
    this.header.toggleMenuHeader();
  }

  sair() {
    this.accountService.logout();
  }

}
