import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DraggableDirective } from 'app/shared/directives/drag-drop/draggable.directive';
import { DroppableDirective } from 'app/shared/directives/drag-drop/droppable.directive';
import { DragDropService } from 'app/shared/services/drag-drop.service';

import { DropEvent } from 'app/shared/directives/drag-drop/drop-event.model';

import { DragDropComponent } from './drag-drop.component';

describe('DragDropComponent', () => {
  let component: DragDropComponent;
  let fixture: ComponentFixture<DragDropComponent>;

  let dragDropService: DragDropService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropComponent, DraggableDirective, DroppableDirective ],
      imports: [ FormsModule ],
      providers: [DragDropService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropComponent);
    component = fixture.componentInstance;
    // DragDropService actually injected into the component
    dragDropService = fixture.debugElement.injector.get(DragDropService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
