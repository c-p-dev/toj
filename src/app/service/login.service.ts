import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  openGoogleLogin(){
    this.afAuth.auth.signInWithPopup( new auth.GoogleAuthProvider);
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
