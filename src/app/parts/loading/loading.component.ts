import { Component, OnInit } from '@angular/core';
import { Loading } from 'src/app/utils/loading';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loading = false;
  constructor(
    private _loading: Loading
  ) { 
    this._loading.loading.subscribe(res => this.loading = res);
  }

  ngOnInit(): void {
  }

}
