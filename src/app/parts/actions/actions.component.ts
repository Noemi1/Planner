import { Component, OnInit } from '@angular/core';
import { faChartColumn, faChartLine, faHome, faRotate } from '@fortawesome/free-solid-svg-icons';
import { ActionsService } from 'src/app/helpers/actions';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  faHome = faHome;
  faChartLine = faChartColumn;
  faRotate = faRotate;

  open = false;

  constructor(
    private actions: ActionsService
  ) {
    this.actions.open.subscribe(res => this.open = res);
   }

  ngOnInit(): void {
  }

  toggle() {
    this.actions.toggle();
  }

}
