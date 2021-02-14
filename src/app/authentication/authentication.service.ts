import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "./login.model";
import { Singup } from "./singup.model";

@Injectable({ providedIn: "root" })
export class AuthenticationService {

  apiUrl = "http://127.0.0.1:3000/api/users";
  /* https://stackoverflow.com/questions/31131490/how-to-subscribe-to-an-event-on-a-service-in-angular2 */
  isAuthentication: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { }

  emitIsAuthenticationEvent(data: boolean) {
    this.isAuthentication.emit(data);
  }
  getAuthenticationEmitter() {
    return this.isAuthentication;
  }

  singup(singupData: Singup) {
    console.log('Service: ', singupData);

    this.http.post<Singup>(this.apiUrl + '/singup', singupData)
      .subscribe(
        responseData => console.log('success', responseData),
        error => console.log('oops', error)
      )
  }

  login(loginData: Login) {
    console.log('Service: ', loginData);

    //TODO add API url

    this.http.post<Login>(this.apiUrl + '/login', loginData)
      .subscribe(
        responseData => console.log('success', responseData),
        error => console.log('oops', error)
      )
  }
}
