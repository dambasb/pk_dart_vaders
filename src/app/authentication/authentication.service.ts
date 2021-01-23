import { EventEmitter } from "@angular/core";

export class AuthenticationService {
  /* https://stackoverflow.com/questions/31131490/how-to-subscribe-to-an-event-on-a-service-in-angular2 */
  isAuthentication: EventEmitter<boolean> = new EventEmitter();

  emitIsAuthenticationEvent(data: boolean) {
    this.isAuthentication.emit(data);
  }
  getAuthenticationEmitter() {
    return this.isAuthentication;
  }
}
