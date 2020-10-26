import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  template: `<h4>Click Outside Test</h4>
  <div
    (click)="onClick($event)"
    (appClickOutside)="onClickedOutside($event)"
    [attachOutsideOnClick]="attachOutsideOnClick">
    <p>Clicked inside: {{countInside}}</p>
    <p>Clicked outside: {{countOutside}}</p>
    <label>
      <input type="checkbox" [checked]="attachOutsideOnClick" (click)="_toggleAttachOutsideOnClick()" />
      <span>Attach on click</span>
    </label>
  </div>`
})
class TestClickOutsideComponent {
  private countInside: number = 0;
  private countOutside: number = 0;
  private attachOutsideOnClick = false;
  private _toggleAttachOutsideOnClick() { this.attachOutsideOnClick = !this.attachOutsideOnClick; }
  private onClick(e: Event) { this.countInside++; }
  private onClickedOutside(e: Event) { this.countOutside++; }
}

describe('ClickOutsideDirective', () => {
  let component: TestClickOutsideComponent;
  let fixture: ComponentFixture<TestClickOutsideComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickOutsideDirective, TestClickOutsideComponent]
    });

    fixture = TestBed.createComponent(TestClickOutsideComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('div'));
  });

  it('Directive should add class to test div', () => {
    // TODO add some tests
    // inputEl.triggerEventHandler('click', null);
    // fixture.detectChanges();

    // expect(inputEl.nativeElement.classList.length).toBe(1);
    // const directive = new ClickOutsideDirective();
    // expect(directive).toBeTruthy();
  });
});
