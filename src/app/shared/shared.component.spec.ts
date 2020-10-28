import { Component, Input, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedComponent } from './shared.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-select',
  template: 'dummy component for testing'
})
export class NgSelectStubComponent {
  @Input() items: string[];
  @Input() bindLabel: string;
  @Input() bindValue: string;

}

@Component({
  selector: 'app-drag-drop-test',
  template: `dummy testing component`
})
export class DragDropStubComponent {}

@Component({
  selector: 'app-click-outside-test',
  template: `dummy testing component`
})
export class ClickOutsideStubComponent {}


describe('SharedComponent', () => {
  let component: SharedComponent;
  let fixture: ComponentFixture<SharedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        SharedComponent,
        NgSelectStubComponent,
        DragDropStubComponent,
        ClickOutsideStubComponent ],
      imports: [ HttpClientModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
