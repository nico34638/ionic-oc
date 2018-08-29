import { Cd } from '../models/cd';
import { Book } from '../models/Book';

export class TabsService{
    bookList: Book[] = [
      {
        name: 'Caligula',
        Author: 'Albert Camus',
        Lend: true
      },
      {
        name: 'La Centrale',
        Author: 'Elisabeth Filhol',
        Lend: false
      }
    ];

    cdList: Cd[] = [
      {
        name: 'Xeu',
        Author: 'Vald',
        Lend: true
      },
      {
        name: 'Cyborg',
        Author: 'Nekfeu',
        Lend: false
      },
      {
        name: 'Platinum',
        Author: 'Plk',
        Lend: true
      }
    ];

    changedLendOfTabs(name: string, index: number){
      if(name === 'cd'){
        this.cdList[index].Lend = !this.cdList[index].Lend;
      }
      if(name === 'book'){
        this.bookList[index].Lend = !this.bookList[index].Lend;
      }

    }

}
