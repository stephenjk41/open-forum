import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IUser } from './user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
  dashOpen = false;
  loginOpen = false;
  public signedIn = false;

  public user: IUser = {
    uid: "",
    email: "",
    displayName: ""
  }
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.signedIn = true;
          this.user$.subscribe(user => {
            this.user.displayName = user.displayName;
            this.user.uid = user.uid;
            this.user.email = user.email;
          })
          return this.afs.doc<IUser>(`users/${user.uid}`).valueChanges();
        } else {
          this.signedIn = false;
          return of(null);
        }
      })
    )


  }

  sendUserData(user) {
    return this.user;
  }

  async login(email: string, password: string) {
    var result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async register(email: string, password: string) {
    var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    this.sendEmailVerification();
  }

  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification()
    this.router.navigate(['admin/verify-email']);
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.dashOpen = false;
    this.user$ = null;
    return this.router.navigate(['/']);
  }

  private updateUserData(user) {
    //sets user data to firestore on login
    const userRef: AngularFirestoreDocument<IUser> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    return userRef.set(data, { merge: true });
  }

  public getUserData(): any {
    return this.afAuth.authState;
  }

}
