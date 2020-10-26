import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ClickOutsideDirective } from 'app/shared/directives/click-outside.directive';
import { ClickOutsideComponent } from './click-outside.component';

describe('ClickOutsideComponent', () => {
  let component: ClickOutsideComponent;
  let fixture: ComponentFixture<ClickOutsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickOutsideComponent, ClickOutsideDirective ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
