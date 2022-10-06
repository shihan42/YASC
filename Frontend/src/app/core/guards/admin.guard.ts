import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';


@Injectable()
export class AdminGuard implements CanActivate
{
    constructor(
        private router: Router,
        private authService: AuthenticationService
    )
    {}

    canActivate() : boolean
    {
        const user = this.authService.getCurrentUser();

        if (user && user.isAdmin)
        {
            return true;
        }

        this.router.navigate(['/']);
        return false;
    }
}
