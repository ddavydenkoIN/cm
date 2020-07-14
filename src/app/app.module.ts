import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { CmRoutingModule } from './app-routing.module';
import { CmTranslateModule } from './modules/translate/cm-translate.module';
import { cmReducers, metaReducers } from './root-store/reducers';
import { cmEffects } from './root-store/effects';
import { CmDataService } from './providers/services/cm-data.service';
import { environment } from "../environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,

    CmRoutingModule,
    CmTranslateModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(CmDataService, {dataEncapsulation: false, passThruUnknownUrl: true, delay: 0}),

    StoreModule.forRoot(cmReducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      }
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument({
      logOnly: false,
    }),
    EffectsModule.forRoot(cmEffects),
  ],
    declarations: [
      AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
