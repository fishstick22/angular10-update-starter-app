import { NgModule            } from '@angular/core';
import { CommonModule        } from '@angular/common';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule    } from '@angular/common/http';

import { NgbModule           } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule      } from '@ng-select/ng-select';

import { routedComponents,
         SharedRoutingModule } from './shared-routing.module';

// testing within shared module
import { ClickOutsideComponent } from './components/test/click-outside/click-outside.component';
import { DragDropComponent     } from './components/test/drag-drop/drag-drop.component';

// exported directives
import { ClickOutsideDirective  } from './directives/click-outside.directive';
import { DraggableDirective     } from './directives/drag-drop/draggable.directive';
import { DroppableDirective     } from './directives/drag-drop/droppable.directive';
import { SortableTableDirective } from './directives/sortable-table.directive';

@NgModule({
  declarations: [
    // SharedComponent
    routedComponents,
    // exported components

    // local testing components
    ClickOutsideComponent,
    DragDropComponent,
    // exported directives
    ClickOutsideDirective,
    DraggableDirective,
    DroppableDirective,
    SortableTableDirective
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgSelectModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
