import { Injectable } from "@angular/core";
import { CmBanner1Component } from "../../../elements/banners/cm-banner1/cm-banner1.component";
import { CmBannerData } from "../../../../models/elements/banners";
import { CmBanner2Component } from "../../../elements/banners/cm-banner2/cm-banner2.component";
import { CmBanner4Component } from "../../../elements/banners/cm-banner4/cm-banner4.component";
import { CmBanner3Component } from "../../../elements/banners/cm-banner3/cm-banner3.component";
import { CmBanner7Component } from "../../../elements/banners/cm-banner7/cm-banner7.component";
import { CmBanner5Component } from "../../../elements/banners/cm-banner5/cm-banner5.component";
import { CmBanner6Component } from "../../../elements/banners/cm-banner6/cm-banner6.component";
import { CmBanner8Component } from "../../../elements/banners/cm-banner8/cm-banner8.component";
import { CmBanner9Component } from "../../../elements/banners/cm-banner9/cm-banner9.component";
import { CmBanner10Component } from "../../../elements/banners/cm-banner10/cm-banner10.component";
import { CmBanner11Component } from "../../../elements/banners/cm-banner11/cm-banner11.component";

@Injectable()
export class CmBannersPageService {

  getBannersData(): CmBannerData[] {
    return [{
      component: CmBanner1Component,
      fields: {
        images: { url1: '/assets/img/elements/banners/banner1/quote.icon.png' },
        text: {
          text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          text2: 'Sincere',
          text3: 'Mr. Smith',
        },
      }
    }, {
      component: CmBanner2Component,
      fields: {
        backgroundImages: {
          primary: '/assets/img/elements/banners/banner2/grey_background.jpg',
        },
        text: {
          text1: "One Moment of life",
          text2: "inspiring text",
        }
      }
    }, {
      component: CmBanner3Component,
      fields: {
        backgroundImages: {
          primary: "/assets/img/elements/banners/banner3/france.jpg",
        },
        text: {
          text1: "Very inspiring text",
          text2: "CrEaTivE",
        }
      }
    }, {
      component: CmBanner4Component,
      fields: {
        backgroundImages: {
          primary: "/assets/img/elements/banners/banner4/black_background.jpeg",
        },
        text: {
          text1: "blog template",
          text2: "Live the moment",
          text3: "very long inspiring phrace",
        }
      }
    }, {
      component: CmBanner5Component,
      fields: {
        backgroundImages: {
          primary: "/assets/img/elements/banners/banner5/black_background.jpg",
        },
        text: {
          text1: "Center text 20%",
          text2: "LiFe IN MoTioN",
          text3: "Very inspiring text",
        }
      }
    }, {
      component: CmBanner6Component,
      fields: {
        backgroundImages: {
          primary: "/assets/img/elements/banners/banner6/black_background.jpg",
        },
        text: {
          text1: "Beauty",
          text2: "private",
          text3: "collection",
          text4: "Top Trends",
          text5: "For people with cash",
        }
      }
    }, {
      component: CmBanner7Component,
      fields: {
        backgroundImages: {
          primary: "/assets/img/elements/banners/banner7/black-white-photo.jpg",
        },
        text: {
          text1: "Very inspiring text for two lines straight.",
          text2: "Enjoy your life",
        }
      }
    }, {
      component: CmBanner8Component,
      fields: {
        backgroundImages: {
          primary: "/assets/img/elements/banners/banner6/black_background.jpg",
        },
        text: {
          text1: "small text",
          text2: "be careful with your thoughts they are the beginning of deeds",
          text3: "proverbs 4:23",
        }
      }
    }, {
      component: CmBanner9Component,
      fields: {
        backgroundImages: {
          primary: "/assets/img/elements/banners/banner9/background.jpg",
        },
        text: {
          text1: "Lorem ipsum dolor",
          text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          text3: "lorem ipsum"
        }
      }
    }, {
      component: CmBanner10Component,
      fields: {
        backgroundImages: {
          primary: "/assets/img/elements/banners/banner10/background.jpg",
        },
        text: {
          text1: "Lorem ipsum dolor",
          text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          text3: "lorem ipsum"
        }
      }
    }, {
      component: CmBanner11Component,
      fields: {
        backgroundImages: {
          primary: "/assets/img/elements/banners/banner11/background.jpg",
        },
        text: {
          text1: "Lorem ipsum dolor",
          text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          text3: "lorem ipsum dolor"
        }
      }
    }
    ];
  }
}
