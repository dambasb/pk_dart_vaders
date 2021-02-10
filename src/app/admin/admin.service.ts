import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Admin } from "./admin.model";

@Injectable({ providedIn: "root" })
export class AdminService {

  apiUrl = "http://127.0.0.1:3000/api";
  toggleSort = false;

  users = [
    {
      id: 1,
      firstName: 'Damir'
    },
    {
      id: 2,
      firstName: 'BKristijan'
    },
    {
      id: 3,
      firstName: 'CMarko'
    },
    {
      id: 4,
      firstName: 'FMarko'
    },
    {
      id: 5,
      firstName: 'Damir'
    },
    {
      id: 6,
      firstName: 'BKristijan'
    },
    {
      id: 7,
      firstName: 'CMarko'
    },
    {
      id: 8,
      firstName: 'FMarko'
    }, {
      id: 9,
      firstName: 'Damir'
    },
    {
      id: 10,
      firstName: 'BKristijan'
    },
    {
      id: 11,
      firstName: 'CMarko'
    },
    {
      id: 12,
      firstName: 'FMarko'
    }
  ];

  constructor(private http: HttpClient) { }

  getUsers() {

    return this.http.get<{ message: string, users: Admin[] }>(this.apiUrl + '/users/test');

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
