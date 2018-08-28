import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {
  constructor(private menuCtrl: MenuController){

  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

}
