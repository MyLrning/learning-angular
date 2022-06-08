import { Component, Input} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  @Input()
  personajes: Personaje[] = [
    { name: 'Goku', power: 9000 },
    { name: 'Vegeta', power: 8000 },
  ];



}
