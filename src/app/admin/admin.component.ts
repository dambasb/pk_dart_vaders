import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Admin } from './admin.model';
import { AdminService } from './admin.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {
  users: Admin[] = [];
  faTrash = faTrash;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {

    this.adminService.fetchUsers()
      .pipe(map((usersData) => {
        return usersData.users.map(user => {
          return {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
          }
        });
      }))
      .subscribe((usersData) => {
        console.log(usersData)
        this.users = usersData;
      });
  }


  sort(type: string | number) {
    this.users = this.adminService.sortUsers(type);
  }

  removeUser() {
    console.log(1);
  }

}
