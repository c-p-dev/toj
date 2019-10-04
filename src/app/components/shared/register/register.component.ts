import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { createPipeInstance } from '@angular/core/src/view/provider';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { AddUser, GetUserSuccess } from 'src/app/store/actions/user.actions';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  form: FormGroup = null;

  user: User = null;
  constructor(private db: AngularFirestore,
    private _store: Store<AppState>) { }

  ngOnInit() {
    this.createForm();
    this.form.valueChanges.subscribe(data => {
      console.log(data);
    })

    
  }

  ngAfterViewInit(){
    this.createForm();
  }

  onSubmit() {
    
    if(this.form.valid){
      
      this.sendDataToFireBase(this.form.value);
    }else{
      alert('missing fields');
    }
    
  }

  createForm() {
    let form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', ),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    })
    this.form = form;
    this.form.get('confirmPassword').setValidators([Validators.required, this.confirmPasswordValidator()]);
    this.form.updateValueAndValidity();
  }

  // can be a directive
  confirmPasswordValidator() : ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      return this.form.get('password').value !== this.form.get('confirmPassword').value ? {'passwordIsNotEqual':  true} :  null  ;
    };
  }


  sendDataToFireBase(user){
    let newUser = Object.assign({},user);
    this._store.dispatch(new AddUser(user));
    this._store.dispatch(new GetUserSuccess(user));
    this._store.select(state => state.user).subscribe(data => this.user = data.user);
    
  }

  showUsers(user){
    
   
  }
}
