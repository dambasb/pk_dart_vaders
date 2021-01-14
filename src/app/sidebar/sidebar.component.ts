import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faAngleDown, faAngleRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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

  @Output() onRemoveSidebar: EventEmitter<any> = new EventEmitter<any>();

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.menus = this.sidebarService.getMenuList();
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

  toggleSidebarNav() {
    this.toggleSidebar = !this.toggleSidebar;
  }

  removeSidebar() {
    this.onRemoveSidebar.emit(true);
  }
}
