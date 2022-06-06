import { Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent{

  heroes: string[] = ['Batman', 'Superman', 'Flash', 'Thor'];

  deletedHeroes: string[] = [];

  deleteHeroe(): void {
    const deletedHeroe = this.heroes.pop() || '';
    deletedHeroe.length != 0 ? this.deletedHeroes.push(deletedHeroe):confirm('No more heroes to delete');
    console.log(deletedHeroe);
    
    console.log(this.heroes.length);
    



    // this.deletedHeroes.push(this.heroes[0]);
    // this.heroes.shift();
  }
}
