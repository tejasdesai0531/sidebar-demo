import { Component } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gems-ty-admin-panel';

  sideBarOpen = true;
  isExpanded = 0;

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit() { 
    this.breakpointObserver
      .observe(['(max-width: 680px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.sideBarOpen = false
        } else {
          this.sideBarOpen = true
        }
      });
  }

  openSideBar() {
    this.sideBarOpen = true;
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen
  }
}
