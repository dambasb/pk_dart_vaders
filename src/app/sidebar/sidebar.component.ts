import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
  providers: [SidebarService]
})
export class SidebarComponent implements OnInit {
  menus = [];
  toggle = false;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.menus = this.sidebarService.getMenuList();
  }

  /* Toggle dropdown of specific item in ngFor */
  removeClass(index) {
    this.menus[index].toggle = !this.menus[index].toggle;
    this.toggle = this.menus[index].toggle;
  }
}
