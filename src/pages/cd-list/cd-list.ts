import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { TabsService } from '../../services/tabs.service';
import { Cd } from '../../models/Cd';
import { LendCdPage } from './lend-cd/lend-cd';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdList: Cd[];

  constructor(private menuCtrl: MenuController,
              private modalCtrl: ModalController,
              private tabsService: TabsService){

  }

  ionViewWillEnter(){
    this.cdList = this.tabsService.cdList.slice();
  }

  onLoadCd(index: number){
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

}
