import { TestBed, ComponentFixture, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';


import { DropEvent } from './drop-event.model';
import { DraggableDirective } from './draggable.directive';
import { DragDropService } from 'app/shared/services/drag-drop.service';

@Component({
  template: `
  <li appDraggable
  class="list-group-item list-group-item-action list-group-item-success" [draggable]
  *ngFor="let item of vegetables" [dragClass]="'active'"
  [dragTransitClass]="'active'" [dragData]="item" [dragScope]="item.type" [dragEnabled]="dragEnabled">
  {{item.name}}
  </li>
  `
})
class TestDraggableComponent {
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

describe('DraggableDirective', () => {
  let component: TestDraggableComponent;
  let fixture: ComponentFixture<TestDraggableComponent>;

  // let spy: jasmine.Spy;
  let des: DebugElement[];  // the elements w/ the directive
  // let inputEl: DebugElement;
  let dragDropService: DragDropService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraggableDirective, TestDraggableComponent],
      providers: [DragDropService]
    });
    // .createComponent(TestDraggableComponent);

    fixture = TestBed.createComponent(TestDraggableComponent);
    component = fixture.componentInstance;

    // DragDropService actually injected into the component
    dragDropService = fixture.debugElement.injector.get(DragDropService);

    // all elements with an attached HighlightDirective
    des = fixture.debugElement.queryAll(By.directive(DraggableDirective));

    // fixture = TestBed.createComponent(TestDraggableComponent);
    // component = fixture.componentInstance;
    // inputEl = fixture.debugElement.query(By.css('li'));
  });

  it('Directive should add class to test li', inject([DragDropService], (service: DragDropService) => {
    // TODO write some actual tests
    // inputEl.triggerEventHandler('mousedown', null);
    // fixture.detectChanges();

    // expect(inputEl.nativeElement.classList.length).toBe(1);
    // const directive = new DraggableDirective();
    // expect(directive).toBeTruthy();
  }));
});
