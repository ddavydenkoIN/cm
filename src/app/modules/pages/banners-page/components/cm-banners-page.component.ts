import { AfterViewInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { CmBanner } from '../../../elements/abstract/cm-banner';
import { CmBannersPageService } from '../services/banners-page.service';
import { CmBannerData } from '../../../../models/elements/banners';
import { CmBannersPageBuilder } from '../builders/banners-page.builder';
import { takeUntil } from "rxjs/operators";
import { CmUnsubscribe } from "../../../../providers/abstract/cm-unsubscribe";

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
export class CmBannersPageComponent extends CmUnsubscribe implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('bannerContainers', { read: ViewContainerRef })
  bannerContainers: QueryList<ViewContainerRef>;

  bannerList: CmBannerData[];

  private componentRefs: ComponentRef<CmBanner>[] = [];

  constructor(private resolver: ComponentFactoryResolver,
              private bannerPageService: CmBannersPageService) {
    super();
  }

  ngOnInit() {
    this.bannerPageService.loadBannersData();
    this.bannerPageService.retrieveAllBanners()
      .pipe(takeUntil(this.destroy$))
      .subscribe((banners: CmBannerData[]) => this.bannerList = banners);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.bannerList &&
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
    }, 0);
  }

  ngOnDestroy() {
    this.componentRefs.forEach((ref: ComponentRef<CmBanner>) => ref.destroy());
  }
}
