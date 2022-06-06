import { Component } from "@angular/core";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
})
export class HeroeComponent{
  
  name: string = "Batman";
  age: number = 30;

  get nameToUpper(): string {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(): void {
    this.name = "Superman";
  }

  changeAge(): void {
    this.age = 40;
  }

}