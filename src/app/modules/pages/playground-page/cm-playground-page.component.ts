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
import { ActivatedRoute } from '@angular/router';
import { CmBannerData, CmElement, CmElementType } from '../../../models/elements';
import { CmPlaygroundService } from './services/cm-playground.service';
import { CmBanner } from '../../elements/abstract/cm-banner';
import { CmBannersPageBuilder } from '../banners-page/builders/banners-page.builder';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'cm-playground-page',
  templateUrl: './cm-playground-page.component.html',
  styleUrls: ['./cm-playground-page.component.less']
})
export class CmPlaygroundPageComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('elementContainer', { read: ViewContainerRef })
  elementContainer: ViewContainerRef;


  private id: string;
  private type: CmElementType;
  private element: CmBannerData;
  private componentRef: ComponentRef<CmBanner>;

  constructor(private route: ActivatedRoute,
              private playgroundService: CmPlaygroundService,
              private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = <CmElementType>this.route.snapshot.paramMap.get('type');

    this.initPlayground();
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

  private initPlayground(): void {
    this.playgroundService.selectElementToEdit(this.type, this.id);
    this.playgroundService.retrieveElementByType(this.type, this.id)
      .pipe(filter(data => !!data))
      .subscribe(element => {
        this.element = element;
        setTimeout(() => {
          // @ts-ignore
          const factory: ComponentFactory<CmBanner> = this.resolver.resolveComponentFactory(this.element.component);
          const ref = this.elementContainer.createComponent(factory);
          this.componentRef = new CmBannersPageBuilder()
            .setComponentRef(ref)
            .setFields(this.element.fields)
            .build();
        }, 0);
      });
  }


}
