import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Cd } from '../../../models/Cd';
import { TabsService } from '../../../services/tabs.service';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: Cd;

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController,
              private tabsService: TabsService) {

  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.cd = this.tabsService.cdList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleCd(){
    this.tabsService.changedLendOfTabs('cd', this.index);
  }


}
