import { ComponentRef } from "@angular/core";
import { CmBannerDataFields } from "../../../../models/elements/banners";
import { CmBanner } from "../../../elements/abstract/cm-banner";

export class CmBannersPageBuilder {
  private componentRef: ComponentRef<CmBanner>;
  private fields: CmBannerDataFields;

  setComponentRef(componentRef: ComponentRef<CmBanner>): CmBannersPageBuilder {
    this.componentRef = componentRef;

    return this;
  }

  setFields(fields: CmBannerDataFields): CmBannersPageBuilder {
    this.fields = fields;

    return this;
  }

  build(): ComponentRef<CmBanner> {
    const ref = this.populateInputData();
    this.componentRef = null;

    return ref;
  }

  populateInputData(): ComponentRef<CmBanner> {
    if (!this.fields) {
      return this.componentRef;
    }
    Object
      .entries(this.fields)
      .forEach(([key, value]) => {
        this.componentRef.instance[key] = value;
      });
    return this.componentRef;
  }
}
