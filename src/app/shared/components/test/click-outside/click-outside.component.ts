import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-outside-test',
  templateUrl: './click-outside.component.html',
  styleUrls: ['./click-outside.component.scss']
})
export class ClickOutsideComponent implements OnInit {

  public countInside = 0;
  public countOutside = 0;

  public attachOutsideOnClick = false;

  constructor() { }

  ngOnInit() {
  }

  public _toggleAttachOutsideOnClick() {
    this.attachOutsideOnClick = !this.attachOutsideOnClick;
  }

  public onClick(e: Event) {
    console.log('Clicked inside:', e);
    this.countInside++;
  }

  public onClickedOutside(e: Event) {
    console.log('Clicked outside:', e);
    this.countOutside++;
  }

}
