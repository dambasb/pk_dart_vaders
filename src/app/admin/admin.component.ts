import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {
  users = [];
  faTrash = faTrash;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.users = this.adminService.getUsers();
    this.users.splice(0, 10);
  }

  sort(type: string | number) {
    this.users = this.adminService.sortUsers(type);
  }

  removeUser() {
    console.log(1);
  }

}
