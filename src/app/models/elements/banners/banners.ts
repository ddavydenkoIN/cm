import { CmId, CmImagesModel, CmTextModel, CmThemeModel } from '../../common';

export interface CmBannerData extends CmId<string> {
  component?: unknown;
  fields?: CmBannerDataFields;
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
