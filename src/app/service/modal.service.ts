import { Injectable } from '@angular/core';
import { DomService } from './dom.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private domService: DomService) { }

  private modalElement = 'modal-container';
  private overlayElementId = 'overlay';

  init(component: any, inputs: object, outputs: object){
    let componentConfig = {
      inputs: inputs,
      outputs: outputs
    }

    this.domService.appendComponentTo(this.modalElement, component, componentConfig);
    document.getElementById(this.modalElement).className = 'show';
    document.getElementById(this.overlayElementId).className = 'show';

  }

  destroy(){
    this.domService.removeComponent();
    document.getElementById(this.modalElement).className = 'hidden';
    document.getElementById(this.overlayElementId).className = 'hidden';
  }
  

}
