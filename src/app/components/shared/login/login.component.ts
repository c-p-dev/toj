import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = null;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.createForm();
    this.form.valueChanges.subscribe(data => {
      console.log(data);
    })
  }

  createForm() {
    let form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
    this.form = form;
    
  }

  openGoogleLogin($event){
    $event.preventDefault();
    alert('google');
    this.loginService.openGoogleLogin();
  }

}
