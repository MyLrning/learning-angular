import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    { name: 'Goku', power: 9000 },
    { name: 'Vegeta', power: 8000 },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  addPersonaje( personaje: Personaje ) {
    this._personajes.push(personaje);
  }
}
