 // export for convenience.
export { ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';

import { Component, Directive, HostBinding, HostListener, Injectable, Input } from '@angular/core';
import { NavigationExtras } from '@angular/router';

/* tslint:disable:directive-selector */

@Directive({
  selector: '[routerLink]',
})

/* tslint:enable:directive-selector */

export class RouterLinkStubDirective {

  @Input('routerLink') linkParams: any;

  navigatedTo: any = null;

  @HostListener('click') onClick() {
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
