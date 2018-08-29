import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { TabsService } from '../../services/tabs.service';
import { Book } from '../../models/Book';
import { LendBookPage } from './lend-book/lend-book';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  bookList: Book[];

  constructor(private menuCtrl: MenuController,
              private modalCtrl: ModalController,
              private tabsService: TabsService){

  }

  ionViewWillEnter(){
    this.bookList = this.tabsService.bookList.slice();
  }

  onLoadBook(index: number){
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

}
