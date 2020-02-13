import { AfterViewInit, Input, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { CmBannerBackgroundImages } from '../../../models/elements/banners';
import { CmText } from './cm-text';
import { CmImagesModel, CmThemeModel } from '../../../models/common';

export class CmBanner extends CmText implements OnInit, AfterViewInit {

  @Input()
  images?: CmImagesModel;

  @Input()
  backgroundImages?: CmBannerBackgroundImages;

  @Input()
  backgroundColor?: string;

  @Input()
  theme?: CmThemeModel;

  readonly WHITE = '#fff';
  readonly BLACK = '#000';

  protected name: string;

  @ViewChildren('bgPrimary', { read: ViewContainerRef })
  primaryBGElements: QueryList<ViewContainerRef>;

  @ViewChildren('bgSecondary', { read: ViewContainerRef })
  secondaryBGElements: QueryList<ViewContainerRef>;

  @ViewChildren('borderPrimary', { read: ViewContainerRef })
  primaryBorderElements: QueryList<ViewContainerRef>;

  @ViewChildren('borderSecondary', { read: ViewContainerRef })
  secondaryBorderElements: QueryList<ViewContainerRef>;

  ngAfterViewInit(): void {
    if (this.theme) {
      this.primaryBGElements && this.primaryBGElements.forEach(ref => ref.element.nativeElement.style.backgroundColor = this.theme.primary);
      this.secondaryBGElements && this.secondaryBGElements.forEach(ref => ref.element.nativeElement.style.backgroundColor = this.theme.secondary);
      this.primaryBorderElements && this.primaryBorderElements.forEach(ref => ref.element.nativeElement.style.borderColor = this.theme.primary);
      this.secondaryBorderElements && this.secondaryBorderElements.forEach(ref => ref.element.nativeElement.style.borderColor = this.theme.secondary);
    }
  }

  ngOnInit() {
  }

}
