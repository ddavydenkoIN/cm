import { CmPlaygroundDataConverter } from './playground-data-converter';
import { CmPlaygroundFormData, CmPlaygroundFormField } from '../../../../models/playground';
import { CmBannerData, CmBannerDataFields } from '../../../../models/elements/banners';
import { CmFormFieldNodeType, CmInputType } from '../../../../enums/playground';

export class BannerToPlaygroundDataConverter implements CmPlaygroundDataConverter {

  constructor(bannerModel: CmBannerData) {
    this.banner = bannerModel;
  }
  static PARENT_NODES_LIST: string[] = ['images', 'text', 'backgroundImages', 'theme', 'text1', 'text2', 'text3'];
  static FIELD_NAME_TO_INPUT_TYPE_MAP = new Map([
    ['backgroundColor', CmInputType.COLOR_PICKER],
    ['url1', CmInputType.TEXT_FIELD],
    ['url2', CmInputType.TEXT_FIELD],
    ['url3', CmInputType.TEXT_FIELD],
    ['url4', CmInputType.TEXT_FIELD],
    ['caption', CmInputType.TEXT_FIELD],
    ['color', CmInputType.COLOR_PICKER],
    ['primaryColor', CmInputType.COLOR_PICKER],
    ['secondaryColor', CmInputType.COLOR_PICKER],
  ]);
  private banner: CmBannerData;

  convert(): CmPlaygroundFormData {
    return {
      type: this.banner.type,
      fields: this.buildFields(this.banner.fields, null),
    };
  }

  private buildFields(fields: CmBannerDataFields, parentName: string): CmPlaygroundFormField[] {
    return Object.entries(fields)
      .map(([key, value]: [string, unknown]) => {
          const nodeType = BannerToPlaygroundDataConverter.PARENT_NODES_LIST.includes(key)
            ? CmFormFieldNodeType.PARENT
            : CmFormFieldNodeType.TERMINAL;
          return {
            name: key,
            parentNode: parentName,
            nodeType,
            inputType: (nodeType === CmFormFieldNodeType.TERMINAL && BannerToPlaygroundDataConverter.FIELD_NAME_TO_INPUT_TYPE_MAP.get(key)) || null,
            value: (nodeType === CmFormFieldNodeType.TERMINAL && value) || null,
            children: nodeType === CmFormFieldNodeType.PARENT
              ? this.buildFields(value, key)
              : null,
          };
        }
      );
  }
}
