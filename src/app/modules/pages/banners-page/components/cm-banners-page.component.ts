import {
  AfterViewInit,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from "@angular/animations";
import { CmBanner2Component } from "../../../elements/banners/cm-banner2/cm-banner2.component";
import { CmBanner } from "../../../elements/abstract/cm-banner";
import { CmBanner1Component } from "../../../elements/banners/cm-banner1/cm-banner1.component";
import { BANNERS_LIST } from "../../../elements/banners/cm-banners.module";
import { CmBannersPageService } from "../services/banners-page.service";
import { CmBannerData } from "../../../../models/elements/banners";
import { CmBannersPageBuilder } from "../builders/banners-page.builder";

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
export class CmBannersPageComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('bannerContainers', { read: ViewContainerRef })
  bannerContainers: QueryList<ViewContainerRef>;

  bannerList: CmBannerData[];

  private componentRefs: ComponentRef<CmBanner>[] = [];

  constructor(private resolver: ComponentFactoryResolver,
              private bannerPageService: CmBannersPageService) { }

  ngOnInit() {
    this.bannerList = this.bannerPageService.getBannersData();
  }

  ngAfterViewInit() {
    this.bannerList.forEach((data: any, index: number) => {
      const factory: ComponentFactory<CmBanner> = this.resolver.resolveComponentFactory(data.component);
      const ref = this.bannerContainers.toArray()[index].createComponent(factory);
      this.componentRefs.push(
        new CmBannersPageBuilder()
        .setComponentRef(ref)
        .setFields(data.fields)
        .build()
      );
    });
  }

  ngOnDestroy() {
    this.componentRefs.forEach((ref: ComponentRef<CmBanner>) => ref.destroy());
  }
}
