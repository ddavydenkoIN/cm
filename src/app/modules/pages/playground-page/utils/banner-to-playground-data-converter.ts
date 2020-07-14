import { CmPlaygroundDataConverter } from './playground-data-converter';
import { CmPlaygroundFormData, CmPlaygroundFormField } from '../../../../models/playground';
import { CmBannerData, CmBannerDataFields } from '../../../../models/elements/banners';
import { CmFormFieldNodeType, CmInputType } from '../../../../enums/playground';

export class BannerToPlaygroundDataConverter implements CmPlaygroundDataConverter {

  constructor(bannerModel: CmBannerData) {
    this.banner = bannerModel;
  }
  static PARENT_NODES_LIST: string[] = ['images', 'text', 'backgroundImages'];
  static FIELD_NAME_TO_INPUT_TYPE_MAP = new Map([
    ['backgroundColor', CmInputType.COLOR_PICKER],
    ['url1', CmInputType.TEXT_FIELD],
    ['url2', CmInputType.TEXT_FIELD],
    ['url3', CmInputType.TEXT_FIELD],
    ['url4', CmInputType.TEXT_FIELD],
    ['text1', CmInputType.MEMO_FIELD],
    ['text2', CmInputType.MEMO_FIELD],
    ['text3', CmInputType.MEMO_FIELD],
    ['text4', CmInputType.MEMO_FIELD],
    ['primary', CmInputType.TEXT_FIELD],
    ['secondary', CmInputType.TEXT_FIELD],
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
