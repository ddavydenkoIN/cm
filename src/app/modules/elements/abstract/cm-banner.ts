import { Input, OnInit } from "@angular/core";
import { CmBannerBackgroundImages } from "../../../models/elements/banners";
import { CmTheme } from "../../../enums";
import { CmText } from "./cm-text";


export class CmBanner extends CmText implements OnInit {

  @Input()
  backgroundImages: CmBannerBackgroundImages;

  @Input()
  backgroundColor: string;

  @Input()
  theme: CmTheme;

  ngOnInit() {
  }

}
