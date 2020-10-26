import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { DropEvent } from './drop-event.model';
import { DroppableDirective } from './droppable.directive';
import { DragDropService } from 'app/shared/services/drag-drop.service';

@Component({
  template: `
  <div class="card card-outline-primary mb-3" appDroppable [dragOverClass]="'drag-target-border-green'" [dropScope]="'vegetable'"
  [dragHintClass]="'drag-hint'" (onDrop)="onVegetableDrop($event)">
<!--
  <div class="card-block scroll-list">
      <li *ngFor="let item of droppedVegetables" class="list-group-item">{{item.name}}</li>
  </div> -->
</div>
  `
})
class TestDroppableComponent {
  vegetables = [
    {name: 'Carrot', type: 'vegetable'},
    {name: 'Onion', type: 'vegetable'},
    {name: 'Potato', type: 'vegetable'},
    {name: 'Capsicum', type: 'vegetable'}];

  fruits = [
    {name: 'Apple', type: 'fruit'},
    {name: 'Orange', type: 'fruit'},
    {name: 'Mango', type: 'fruit'},
    {name: 'Banana', type: 'fruit'}];

  droppedFruits = [];
  droppedVegetables = [];
  droppedItems = [];
  fruitDropEnabled = true;
  dragEnabled = true;

  constructor() { }

  onFruitDrop(e: DropEvent) {
    this.droppedFruits.push(e.dragData);
    this.removeItem(e.dragData, this.fruits);
  }

  onVegetableDrop(e: DropEvent) {
    this.droppedVegetables.push(e.dragData);
    this.removeItem(e.dragData, this.vegetables);
  }

  onAnyDrop(e: DropEvent) {
    this.droppedItems.push(e.dragData);

    if (e.dragData.type === 'vegetable') {
      this.removeItem(e.dragData, this.vegetables);
    } else {
      this.removeItem(e.dragData, this.fruits);
    }
  }

  removeItem(item: any, list: Array<any>) {
    const index = list.map(function (e) {
      return e.name;
    }).indexOf(item.name);
    list.splice(index, 1);
  }
}

describe('DroppableDirective', () => {
  let component: TestDroppableComponent;
  let fixture: ComponentFixture<TestDroppableComponent>;
  let des: DebugElement[];

  let dragDropService: DragDropService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DroppableDirective, TestDroppableComponent],
      providers: [DragDropService]
    });

    fixture = TestBed.createComponent(TestDroppableComponent);
    component = fixture.componentInstance;

    // DragDropService actually injected into the component
    dragDropService = fixture.debugElement.injector.get(DragDropService);

    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(By.directive(DroppableDirective));

  });

  it('Directive should add class to test div', () => {
    // TODO write some actual tests
    // inputEl.triggerEventHandler('drop', null);
    // fixture.detectChanges();

    // expect(inputEl.nativeElement.classList.length).toBe(1);
    // const directive = new DroppableDirective();
    // expect(directive).toBeTruthy();
  });
});
