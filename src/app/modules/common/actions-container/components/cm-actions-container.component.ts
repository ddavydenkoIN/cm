import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'cm-actions-container',
  templateUrl: './cm-actions-container.component.html',
  styleUrls: ['./cm-actions-container.component.less'],
  animations: [
    trigger('showHide', [
      state('show', style({
        top: '0px',
        left: '0px',
        height: '100%',
        width: '100%',
        'z-index': 100,
        'background-color': 'red',
      })),
      state('hide', style({
        width: '100%',
        bottom: '0px',
        left: '0px',
        })),
      transition('hide <=> show', [
        animate('1s')
      ]),
    ]),
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
