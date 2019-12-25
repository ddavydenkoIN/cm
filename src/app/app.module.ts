import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material';

import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppComponent} from './app.component';
import {CmRoutingModule} from './app-routing.module';
import {CmTranslateModule} from './modules/translate/cm-translate.module';
import {cmReducers, metaReducers} from './root-store/reducers';
import {cmEffects} from './root-store/effects';
import {CmDataService} from './providers/services/cm-data.service';

@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatIconModule,

      CmRoutingModule,
      CmTranslateModule,

      HttpClientModule,
      HttpClientInMemoryWebApiModule.forRoot(CmDataService, {dataEncapsulation: false, passThruUnknownUrl: true, delay: 0}),

      StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
      StoreModule.forRoot(cmReducers, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }),

      EffectsModule.forRoot(cmEffects),
    ],
    declarations: [
      AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
