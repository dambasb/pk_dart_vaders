import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Admin } from "./admin.model";

@Injectable({ providedIn: "root" })
export class AdminService {

  apiUrl = "http://127.0.0.1:3000/api";
  toggleSort = false;

  private users: Admin[] = [];

  constructor(private http: HttpClient) { }


  fetchUsers() {
    return this.http.get<{ message: string, users: any }>(this.apiUrl + '/users')
  }


  sortUsers(type: string | number) {

    /* If Number */

    if (typeof (this.users[0][type]) === 'number') {
      this.users.sort((a, b) => {

        if (this.toggleSort === false) {
          return a[type] - b[type];
        } else {
          return b[type] - a[type];
        }
      });
    }

    /* If String */

    if (typeof (this.users[0][type]) === 'string') {
      this.users.sort((a, b) => {

        let fa = a[type].toLowerCase(),
          fb = b[type].toLowerCase();

        if (this.toggleSort === false) {
          if (fa > fb) {
            return -1;
          }
          if (fa < fb) {
            return 1;
          }
          return 0;;

        } else {
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;;

        }

      });
    }

    this.toggleSort = !this.toggleSort;
    return this.users;
  }
}
