import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, observable } from "rxjs";
import { User } from '../models/user.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient,
        private db: AngularFirestore,
        private auth: AuthService) {
    }
    
    public getUser() : Observable<User>{
        return this.http.get<User>('./assets/data/user1.json');
    }


    public registerUser(user: User) : Observable<any>{
        let newUser = Object.assign({},user);
        delete newUser['confirmPassword'];
        const id = this.db.createId();
        let addedUser: Observable<any> = this.auth.createUser(user);
       
        return addedUser;
            
    }

    public getUserById(id): Observable<User>{
        let user = this.db.doc<User>(`users/${id}`).valueChanges();
        return user;
    }


	
}