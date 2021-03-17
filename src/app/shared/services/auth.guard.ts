import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.auth.isAuthentificated()) {
            return true;
        } else {
            this.auth.logout();
            this.router.navigate(['/card', 'identity-card'], {
                queryParams: {
                    loginAgain: true
                }
            });
        }
    }
}
