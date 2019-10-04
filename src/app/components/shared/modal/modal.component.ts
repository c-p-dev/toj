import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = 'Modal';
  show = false;
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  close(){
    this.modalService.destroy();
  }

}
