import { Component } from '@angular/core';

/**
 * Generated class for the JokeListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'joke-list',
  templateUrl: 'joke-list.html'
})
export class JokeListComponent {

  jokes: Object[] // Oppure Array<Object>
  text: string

  constructor() {
    console.log('Hello JokeListComponent Component');
    this.text = 'Hello World';
    this.jokes = [
      {
        text: "Testo1"
      },
      {
        text: "Testo2"
      },
      {
        text: "Testo3"
      },
    ]
  }

}
