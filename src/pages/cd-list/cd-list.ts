import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  constructor(private menuCtrl: MenuController){

  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

}
