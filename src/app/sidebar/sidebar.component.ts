import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faAngleDown, faAngleRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../authentication/authentication.service';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
  providers: [SidebarService]
})
export class SidebarComponent implements OnInit {
  menus = [];
  toggleDropdown = false;
  toggleSidebar = false;
  faAngleRight = faAngleRight;
  faAngleDown = faAngleDown;
  faTimes = faTimes;
  faBars = faBars;
  token = false;

  constructor(private sidebarService: SidebarService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.menus = this.sidebarService.getMenuList();
    if (this.authenticationService.getToken()) {
      this.token = true;
    }

  }

  /* Toggle dropdown of specific item in ngFor */
  toggleDropdownClass(index: number) {

    /* Open clicked dropdown and close all others */
    this.menus.forEach((data, i) => {
      if (i === index) {
        this.menus[i].toggle = !this.menus[index].toggle;
      } else {
        this.menus[i].toggle = false;
      }
    });

    this.toggleDropdown = this.menus[index].toggle;
  }

  /* Toggle Sidebar */
  toggleSidebarNav() {
    this.toggleSidebar = !this.toggleSidebar;
  }

  /* Remove Sidebar when navigating to Login Component */
  removeSidebar() {
    this.authenticationService.emitIsAuthenticationEvent(true);
  }
}
