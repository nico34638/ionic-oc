import { Cd } from '../models/cd';

export class TabsService{
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
        console.log('en preparation');
      }
    
    }

}
