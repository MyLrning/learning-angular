import { Component} from '@angular/core';

interface Personaje {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    { name: 'Goku', power: 9000 },
    { name: 'Vegeta', power: 8000 },
  ];

  new: Personaje = {
    name: '',
    power: 0
  }

  add() {
    if (this.new.name.trim().length === 0) { return; }
    
    this.personajes.push(this.new);
    this.new = {
      name: '',
      power: 0
    }
  }

}
