 // export for convenience.
export { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';

import { Component, Directive, HostBinding, Injectable, Input } from '@angular/core';
import { NavigationExtras } from '@angular/router';

/* tslint:disable:directive-selector */
/* tslint:disable:use-host-property-decorator */
/* tslint:disable:no-host-metadata-property */
@Directive({
  selector: '[routerLink]',
  host: {
    '(click)': 'onClick()'
  }
})
/* tslint:enable:use-host-property-decorator */
/* tslint:enable:directive-selector */

export class RouterLinkStubDirective {
  // @HostBinding('')
  // @HostListener()
  /* tslint:disable:no-input-rename */
  @Input('routerLink') linkParams: any;
  /* tslint:enable:no-input-rename */
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

/* tslint:disable:component-selector */
@Component({selector: 'router-outlet', template: ''})
export class RouterOutletStubComponent { }
/* tslint:enable:component-selector */

@Injectable()
export class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) { }
}


// Only implements params and part of snapshot.paramMap
import { BehaviorSubject } from 'rxjs';
import { convertToParamMap, ParamMap } from '@angular/router';

@Injectable()
export class ActivatedRouteStub {

  // ActivatedRoute.paramMap is Observable
  private subject = new BehaviorSubject(convertToParamMap(this.testParamMap));
  paramMap = this.subject.asObservable();

  // Test parameters
  // tslint:disable-next-line: variable-name
  private _testParamMap: ParamMap;
  get testParamMap() { return this._testParamMap; }
  set testParamMap(params: {}) {
    this._testParamMap = convertToParamMap(params);
    this.subject.next(this._testParamMap);
  }

  // ActivatedRoute.snapshot.paramMap
  get snapshot() {
    return { paramMap: this.testParamMap };
  }
}
