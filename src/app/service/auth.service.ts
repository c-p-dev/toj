import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.interface';
import { of, from, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
    private db: AngularFirestore) { }


  createUser(user: User): Observable<any> {
    let result: Observable<any>;
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((data: firebase.auth.UserCredential )=>{
        console.log(data);
        this.createUserInfo(user, data.user.uid);
        result =  this.getUserInformation(data.user.uid);

      })
      .catch((error)=>{
        result = of(error)
      })


      return result;
  }

  createUserInfo(user:User, uid: string){
    const id = this.db.createId();
      this.db.collection('users').doc(uid).set(user)
      .then(()=>{
          const addedUser = this.getUserInformation(uid);
          return addedUser;
      }).catch((e)=>{
          return Observable.throw(e);
      });
  }

  getUserInformation(userId: string){
      let user = this.db.doc<User>(`users/${userId}`).valueChanges();
      return user;
  
  }

}
