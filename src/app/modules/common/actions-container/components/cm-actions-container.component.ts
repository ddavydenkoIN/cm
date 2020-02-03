import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cm-actions-container',
  templateUrl: './cm-actions-container.component.html',
  styleUrls: ['./cm-actions-container.component.less']
})
export class CmActionsContainerComponent implements OnInit {

  isShow: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleActions(): void {
    this.isShow = !this.isShow;
  }

}
