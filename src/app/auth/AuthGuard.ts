// © 2024 Vasiliy Lawing
import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Role} from './user';
import {AuthService} from "./auth.service";


@Injectable()
export class PermissionService {
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
      this.router.navigateByUrl('/login').then();
    } else {
      this.redirectAfterLoginUrl = '/map';
    }

    return doIHavePermission;
  }
}
export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return <boolean>inject(PermissionService).canActivate(next, state);
}

