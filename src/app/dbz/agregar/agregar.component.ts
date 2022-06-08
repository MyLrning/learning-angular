import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() personajes: Personaje[] = []

  @Input() new: Personaje = {
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
