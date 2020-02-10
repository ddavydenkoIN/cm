import { CmImagesModel, CmTextModel } from "../../common";

export interface CmBannerData {
  component: unknown;
  fields?: CmBannerDataFields;
}

export interface CmBannerDataFields {
  images?: CmImagesModel;
  text?: CmTextModel;
  backgroundColor?: string;
  backgroundImages?: CmBannerBackgroundImages;
}

export interface CmBannerBackgroundImages {
  primary: string;
  secondary?: string;
}
