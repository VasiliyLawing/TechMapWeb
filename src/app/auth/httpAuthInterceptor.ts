import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";



@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private userService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.userService.userValue;
    if (user != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${(user.token)}`
        }
      });
    }

    return next.handle(request);
  }
}
