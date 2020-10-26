import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';

// https://angularfirebase.com/lessons/bootstrap-4-collapsable-navbar-work-with-angular/
// huff, the BootStrap 4 Navbar needs a little nudge to work with Angular

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  @Input() customLogoTitle: string;

  show: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {
  }

  toggleCollapse() {
    this.show = !this.show;
  }
}
