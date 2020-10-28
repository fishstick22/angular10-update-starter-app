// Core Module
//
// https://medium.com/@michelestieven/organizing-angular-applications-f0510761d65a
//
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';

// shared
// import { SharedModule          } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    // CallbackComponent,
    NavbarComponent,
    // FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  providers: [

  ],
  exports: [
    // CallbackComponent,
    NavbarComponent,
    // FooterComponent,
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('Cannot Import and Instantiate CoreModule!');
    }
  }
}
