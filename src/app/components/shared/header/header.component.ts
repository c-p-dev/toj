import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  clickLogin(){
    let inputs = {
      isMobile: false,
    }
    this.modalService.init(LoginComponent, inputs, {} );
  }

  clickRegister(){
    let inputs = {
      isMobile: false,
    }
    this.modalService.init(RegisterComponent, inputs, {} );
  }

  
}
