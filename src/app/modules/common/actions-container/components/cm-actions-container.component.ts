import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CmElementType } from '../../../../models/elements';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-actions-container',
  templateUrl: './cm-actions-container.component.html',
  styleUrls: ['./cm-actions-container.component.less'],
  animations: [
    trigger('showHide', [
      state('show', style({
        left: '0px',
        height: '100%',
        top: '0px',
        opacity: 0.5
      })),
      state('hide', style({
        opacity: 0,
        left: '-50px',
        top: '0px',
      })),
      transition('hide <=> show', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class CmActionsContainerComponent implements OnInit {
  @Input()
  type: CmElementType;

  @Input()
  id: string;

  isShow: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleActions(): void {
    this.isShow = !this.isShow;
  }

  onEditButtonClick(): void {
    this.router.navigateByUrl(`/playground/${this.type}/${this.id}`);
  }

}
