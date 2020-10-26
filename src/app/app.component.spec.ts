import { Component, DebugElement, Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { By } from '@angular/platform-browser';

import { APP_CONFIG, AppConfig } from 'app/app.config';
import { AppRoutingModule } from 'app/app-routing.module';
import { AuthService } from 'app/core/auth/auth.service';

import { NavbarComponent } from 'app/core/navbar/navbar.component';
// import { FooterComponent } from 'app/core/footer/footer.component';
import { HomeComponent } from 'app/core/home/home.component';
import { PageNotFoundComponent } from 'app/core/page-not-found/page-not-found.component';

import { AppComponent } from './app.component';

import { RouterLinkStubDirective } from '../testing';
import { RouterOutletStubComponent } from '../testing';

@Injectable()
export class MockAuthService {
  loggedIn: boolean = false;
  mockService = 'this is a mock of AuthService';

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  get authenticated(): boolean {
    return this.loggedIn;
  }
}


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        // FooterComponent,
        HomeComponent,
        PageNotFoundComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
      providers: [
        // AuthService,// NO! Don't provide the real service!
                      // Provide a test-double instead
        { provide: AuthService, useValue: MockAuthService },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: APP_CONFIG, useValue: AppConfig }
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular 8 Stuff (dev)'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular 8 Stuff (dev)');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('angular8-exploration-app app is running!');
  // });
});
