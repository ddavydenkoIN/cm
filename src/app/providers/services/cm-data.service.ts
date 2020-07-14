import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CmBannerData } from '../../models/elements/banners';
import { CmColorsEnum } from '../../enums/common';

@Injectable()
export class CmDataService implements InMemoryDbService {

  createDb() {
    const banners: CmBannerData[] = [
      {
        id: "1",
        name: "1",
        type: "banner",
        fields: {
          theme: {
            primary: CmColorsEnum.WHITE,
            secondary: CmColorsEnum.BLACK,
          },
          backgroundColor: CmColorsEnum.BLACK,
          images: { url1: '/assets/img/elements/banners/banner1/quote.icon.png' },
          text: {
            text1: {color: CmColorsEnum.BLACK, caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' },
            text2: {color: CmColorsEnum.BLACK, caption: 'Sincere'},
            text3: {color: CmColorsEnum.BLACK, caption: 'Mr. Smith'},
          },
        }
      }, {
        id: "2",
        name: "2",
        type: "banner",
        fields: {
          theme: {
            primary: CmColorsEnum.BLACK,
            secondary: CmColorsEnum.WHITE,
          },
          backgroundImages: {
            primary: '/assets/img/elements/banners/banner2/grey_background.jpg',
          },
          text: {
            text1: {
              caption: "One Moment of life",
              color: CmColorsEnum.WHITE,
            },
            text2: {
              caption: "inspiring text",
              color: CmColorsEnum.WHITE,
            },
          }
        }
      }
    ];

    return { banners };
  }
}

