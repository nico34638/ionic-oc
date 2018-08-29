export class Book{
  Author: string;
  Lend: boolean;
  
  constructor(public name: string){
    this.Lend = false;
  }
}
