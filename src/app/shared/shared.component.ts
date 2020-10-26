import { Component, OnInit } from '@angular/core';
import { DataService, Person } from './services/data.service';

// https://stackblitz.com/run?file=src%2Fdata-source-array-example.component.ts
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  people: Person[] = [];
  selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';

  selectedSimpleItem = 'Two';
  simpleItems = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getPeople().subscribe(items => this.people = items);
    this.simpleItems = [true, 'Two', 3];
  }

}
