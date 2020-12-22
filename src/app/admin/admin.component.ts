import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {
  users = [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.users = this.adminService.getUsers();
  }

  sort(type: string | number) {
    this.users = this.adminService.sortUsers(type);
  }

}
