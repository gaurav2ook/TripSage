import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = this.authService.getUserRole(); // Get the user role from the auth service

    // Check if the user is logged in (has a token) and has the required role for the route
    if (this.authService.getToken() && userRole === route.data['role']) {
      return true;
    }

    // If the user is not authorized, redirect to the login page
    this.router.navigate(['/login']);
    return false;
  }
}

