import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'cm-actions-container',
  templateUrl: './cm-actions-container.component.html',
  styleUrls: ['./cm-actions-container.component.less'],
  animations: [
    trigger('showHide', [
      state('show', style({
        bottom: '0px',
        height: '20%',
        width: '100%',
        opacity: 0.5,
        'background-color': 'red',
      })),
      state('hide', style({
        opacity: 0,
        bottom: '0px',
        width: '100%',
      })),
      transition('hide <=> show', [
        animate('0.5s')
      ]),
    ])
  ]
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
