import { Component, Input, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ExploreComponent } from './explore.component';

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

describe('ExploreComponent', () => {
  let component: ExploreComponent;
  let fixture: ComponentFixture<ExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExploreComponent,
        NgSelectStubComponent ],
      imports: [ HttpClientModule, FormsModule, NgbModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
