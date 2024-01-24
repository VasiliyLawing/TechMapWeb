import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Role} from './user';
import {AuthService} from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate {
  redirectAfterLoginUrl: string|null = null;

  constructor(private userService: AuthService, private router: Router) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    const user = this.userService.userValue;
    const doIHavePermission = user !== null && user.role !== Role.guest;

    if (!doIHavePermission) {
      this.redirectAfterLoginUrl = state.url;
      this.router.navigateByUrl('/login');
    } else {
      this.redirectAfterLoginUrl = '/map';
    }

    return doIHavePermission;
  }
}
