import { Injectable } from '@angular/core';
import { CmBannerData } from '../../../../models/elements/banners';
import { BANNERS_MAP } from '../../../elements/banners/cm-banners.module';
import { CmHttpService } from '../../../../providers/services/cm-http.service';
import { CmBannersStoreService } from '../store/banners-store.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CmBannersPageService {
  constructor(private httpService: CmHttpService,
              private bannersStoreService: CmBannersStoreService) {}

  loadBannersData(): void {
    this.bannersStoreService.loadBannersData();
  }

  retrieveBannerById(id: string): Observable<CmBannerData> {
    return this.bannersStoreService.retrieveBannerById(id)
      .pipe(
        map((bannerData: CmBannerData) => ({
            ...bannerData,
            component: BANNERS_MAP[bannerData.id],
          }),
        ));
  }

  retrieveAllBanners(): Observable<CmBannerData[]> {
    return this.bannersStoreService.retrieveAllBanners()
      .pipe(
        map((bannersData: CmBannerData[]) => bannersData.map((bannerData: CmBannerData) => ({
          ...bannerData,
          component: BANNERS_MAP[bannerData.id],
        })),
      ));
  }
    //
    // return [
    //   {
    //     id: "CmBanner1Component",
    //     fields: {
    //       theme: {
    //         primary: CmColorsEnum.BLUE,
    //         secondary: CmColorsEnum.YELLOW,
    //       },
    //       backgroundColor: CmColorsEnum.BLACK,
    //       images: { url1: '/assets/img/elements/banners/banner1/quote.icon.png' },
    //       text: {
    //         text1: {color: CmColorsEnum.YELLOW, caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' },
    //         text2: {color: CmColorsEnum.YELLOW, caption: 'Sincere'},
    //         text3: {color: CmColorsEnum.YELLOW, caption: 'Mr. Smith'},
    //       },
    //     }
    //   }, {
    //   id: "CmBanner2Component",
    //   fields: {
    //     theme: {
    //       primary: CmColorsEnum.BLACK,
    //       secondary: CmColorsEnum.WHITE,
    //     },
    //     backgroundImages: {
    //       primary: '/assets/img/elements/banners/banner2/grey_background.jpg',
    //     },
    //     text: {
    //       text1: {
    //         caption: "One Moment of life",
    //         color: CmColorsEnum.WHITE,
    //       },
    //       text2: {
    //         caption: "inspiring text",
    //         color: CmColorsEnum.WHITE,
    //       },
    //     }
    //   }
    // }
    // , {
    //   component: CmBanner3Component,
    //   fields: {
    //     backgroundImages: {
    //       primary: "/assets/img/elements/banners/banner3/france.jpg",
    //     },
    //     text: {
    //       text1: "Very inspiring text",
    //       text2: "CrEaTivE",
    //     }
    //   }
    // }, {
    //   component: CmBanner4Component,
    //   fields: {
    //     backgroundImages: {
    //       primary: "/assets/img/elements/banners/banner4/black_background.jpeg",
    //     },
    //     text: {
    //       text1: "blog template",
    //       text2: "Live the moment",
    //       text3: "very long inspiring phrace",
    //     }
    //   }
    // }, {
    //   component: CmBanner5Component,
    //   fields: {
    //     backgroundImages: {
    //       primary: "/assets/img/elements/banners/banner5/black_background.jpg",
    //     },
    //     text: {
    //       text1: "Center text 20%",
    //       text2: "LiFe IN MoTioN",
    //       text3: "Very inspiring text",
    //     }
    //   }
    // }, {
    //   component: CmBanner6Component,
    //   fields: {
    //     backgroundImages: {
    //       primary: "/assets/img/elements/banners/banner6/black_background.jpg",
    //     },
    //     text: {
    //       text1: "Beauty",
    //       text2: "private",
    //       text3: "collection",
    //       text4: "Top Trends",
    //       text5: "For people with cash",
    //     }
    //   }
    // }, {
    //   component: CmBanner7Component,
    //   fields: {
    //     backgroundImages: {
    //       primary: "/assets/img/elements/banners/banner7/black-white-photo.jpg",
    //     },
    //     text: {
    //       text1: "Very inspiring text for two lines straight.",
    //       text2: "Enjoy your life",
    //     }
    //   }
    // }, {
    //   component: CmBanner8Component,
    //   fields: {
    //     backgroundImages: {
    //       primary: "/assets/img/elements/banners/banner6/black_background.jpg",
    //     },
    //     text: {
    //       text1: "small text",
    //       text2: "be careful with your thoughts they are the beginning of deeds",
    //       text3: "proverbs 4:23",
    //     }
    //   }
    // }, {
    //   component: CmBanner9Component,
    //   fields: {
    //     backgroundImages: {
    //       primary: "/assets/img/elements/banners/banner9/background.jpg",
    //     },
    //     text: {
    //       text1: "Lorem ipsum dolor",
    //       text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //       text3: "lorem ipsum"
    //     }
    //   }
    // }, {
    //   component: CmBanner10Component,
    //   fields: {
    //     backgroundImages: {
    //       primary: "/assets/img/elements/banners/banner10/background.jpg",
    //     },
    //     text: {
    //       text1: "Lorem ipsum dolor",
    //       text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //       text3: "lorem ipsum"
    //     }
    //   }
    // }, {
    //   component: CmBanner11Component,
    //   fields: {
    //     backgroundImages: {
    //       primary: "/assets/img/elements/banners/banner11/background.jpg",
    //     },
    //     text: {
    //       text1: "Lorem ipsum dolor",
    //       text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //       text3: "lorem ipsum dolor"
    //     }
    //   }
    // }, {
    //   component: CmBanner12Component,
    //   fields: {
    //     backgroundImages: {
    //       primary: "/assets/img/elements/banners/banner12/background.jpg",
    //     },
    //     text: {
    //       text1: "Lorem ipsum dolor",
    //       text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     }
    //   }
    // }
    // ]

  //}
}
