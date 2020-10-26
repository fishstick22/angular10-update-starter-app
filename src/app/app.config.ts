import { InjectionToken } from '@angular/core';

import { environment } from 'environments/environment';

// https://github.com/angular/angular-cli/issues/2034
export interface IAppConfig {
  apiEndpoint: string;
  envName: string;
  cachePrograms: boolean;
  cacheProgramProfiles: boolean;
}

// https://github.com/angular/angular-cli/issues/2034
export let APP_CONFIG = new InjectionToken('app.config');

// https://stackoverflow.com/questions/34986922/define-global-constants-in-angular-2/40287063#40287063
export const AppConfig: IAppConfig = {
  apiEndpoint: environment.apiEndpoint,
  envName: environment.envName,
  cachePrograms: environment.cachePrograms,
  cacheProgramProfiles: environment.cacheProgramProfiles
};

