import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      The base is: <strong> {{ base }} </strong>
    </h3>
    <button (click)="operate('-')">- {{ base }}</button>

    <span>{{ number }}</span>

    <button (click)="operate('+')">+ {{ base }}</button>
  `,
})
export class ContadorComponent {
  title   : string = 'Contador App';
  number  : number = 0;

  base    : number = 5;

  operate(operation: string) {
    if (operation === '+') {
      this.number += this.base;
    } else if (operation === '-') {
      this.number -= this.base;
    }
  }
}
