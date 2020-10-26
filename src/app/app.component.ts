import { Component, Injectable, Inject } from '@angular/core';
// import { environment } from 'environments/environment';
import { APP_CONFIG, IAppConfig } from 'app/app.config';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'angular8-exploration-app';
  title: string;

  constructor(@Inject(APP_CONFIG) private config: IAppConfig, public authService: AuthService) {
    this.title = 'Angular 8 Stuff (' + config.envName + ')';
  }
}
