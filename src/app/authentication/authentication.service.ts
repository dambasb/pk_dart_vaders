import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "./login.model";
import { Singup } from "./singup.model";

@Injectable({ providedIn: "root" })
export class AuthenticationService {

  private apiUrl = "http://127.0.0.1:3000/api/users";
  private token: string;

  /* https://stackoverflow.com/questions/31131490/how-to-subscribe-to-an-event-on-a-service-in-angular2 */
  isAuthentication: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private http: HttpClient,
    private router: Router) { }

  emitIsAuthenticationEvent(data: boolean) {
    this.isAuthentication.emit(data);
  }
  getAuthenticationEmitter() {
    return this.isAuthentication;
  }

  singup(singupData: Singup) {

    this.http.post<Singup>(this.apiUrl + '/singup', singupData)
      .subscribe(
        responseData => {
          console.log('success', responseData);
          this.goHome();
        },
        error => console.log('oops', error)
      )
  }

  login(loginData: Login) {

    this.http.post<Login>(this.apiUrl + '/login', loginData)
      .subscribe(
        (responseData) => {
          console.log('success', responseData);
          const token = responseData.token
          this.token = token;

          this.saveAuthData(token)
          this.goHome();
        },

        (error) => { console.log('oops', error) }
      )
  }

  getToken() {
    return this.token;
  }

  goHome() {
    this.router.navigate(['dashboard']);
    this.emitIsAuthenticationEvent(false);
  }

  private saveAuthData(token: string) {
    localStorage.setItem('token', token);
    // localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }


}
