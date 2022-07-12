import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../account.component.css']
})
export class LoginComponent implements OnInit {


  login = {
    email: '',
    password: '',
  };
  
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  logar(form: NgForm) {
    this.accountService.login(this.login.email, this.login.password);
  }

}
