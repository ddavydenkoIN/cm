import { CmImagesModel, CmTextModel, CmThemeModel } from '../../common';
import { CmElement } from '../element.model';

export interface CmBannerData extends CmElement {
}

export interface CmBannerDataFields {
  images?: CmImagesModel;
  text?: CmTextModel;
  backgroundColor?: string;
  backgroundImages?: CmBannerBackgroundImages;
  theme?: CmThemeModel;
}

export interface CmBannerBackgroundImages {
  primary: string;
  secondary?: string;
}
