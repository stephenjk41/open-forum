import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.auth.user$.pipe(take(1), map(user => !!user), tap(loggedIn => {
            if (!loggedIn) {
                console.log('access denied');
                this.router.navigate(['/login']);
            }
        }));
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map