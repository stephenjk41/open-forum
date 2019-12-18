import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
let AuthService = class AuthService {
    constructor(afAuth, afs, router) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.dashOpen = false;
        this.user = {
            uid: "",
            email: "",
            displayName: ""
        };
        this.user$ = this.afAuth.authState.pipe(switchMap(user => {
            if (user) {
                return this.afs.doc(`users/${user.uid}`).valueChanges();
            }
            else {
                return of(null);
            }
        }));
        this.user$.subscribe(user => {
            this.user.displayName = user.displayName;
            this.user.uid = user.uid;
            this.user.email = user.email;
        });
    }
    googleSignin() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const provider = new auth.GoogleAuthProvider();
            const credential = yield this.afAuth.auth.signInWithPopup(provider);
            return this.updateUserData(credential.user);
        });
    }
    signOut() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.afAuth.auth.signOut();
            this.dashOpen = false;
            this.user$ = null;
            return this.router.navigate(['/']);
        });
    }
    updateUserData(user) {
        //sets user data to firestore on login
        const userRef = this.afs.doc(`users/${user.uid}`);
        const data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
        };
        console.log(user);
        return userRef.set(data, { merge: true });
    }
    getUserData() {
        return this.afAuth.authState;
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map