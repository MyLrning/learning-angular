import { Component, Input} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  new: Personaje = {
    name: 'Maestro Roshi',
    power: 1000
  }

  constructor() {}
}
