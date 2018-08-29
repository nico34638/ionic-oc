import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Book } from '../../../models/Book';
import { TabsService } from '../../../services/tabs.service';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

  index: number;
  book: Book;

  constructor(private navParams: NavParams,
              private viewCtrl: ViewController,
              private tabsService: TabsService) {

  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.book = this.tabsService.bookList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleBook(){
    this.tabsService.changedLendOfTabs('book', this.index);
  }

}
