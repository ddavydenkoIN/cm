import { Component, OnInit } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'cm-banners-page',
  templateUrl: './cm-banners-page.component.html',
  styleUrls: ['./cm-banners-page.component.less'],
  animations: [
    trigger('flyInTrigger', [
      state('in', style({
        transform: 'translateY(0)'
      })),
      transition('void => in', [
        animate('0.6s', keyframes([
          style({ transform: 'translateY(-200%)' }),
          style({ transform: 'translateY(-140%)' }),
          style({ transform: 'translateY(-100%)' }),
          style({ transform: 'translateY(-50%)' }),
          style({ transform: 'translateY(0)' }),
          style({ transform: 'translateY(20%)' }),
          style({ transform: 'translateY(0)' }),
        ]))
      ]),
    ]),
  ]
})
export class CmBannersPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
