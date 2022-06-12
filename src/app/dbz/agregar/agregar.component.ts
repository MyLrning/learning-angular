import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input() new: Personaje = {
    name: '',
    power: 0
  }

  constructor( private dbzService: DbzService ) {}

  // @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  add() {
    if (this.new.name.trim().length === 0) { return; }
        
    // this.onNewPersonaje.emit(this.new);
    this.dbzService.addPersonaje(this.new);

    this.new = {
      name: '',
      power: 0
    }
  }

}
