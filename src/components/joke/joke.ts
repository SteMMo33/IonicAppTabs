import { Component, Input } from '@angular/core';

/**
 * Generated class for the JokeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'joke',
  // templateUrl: 'joke.html'
  template: '<h1>Header H1</h1><p>Altro testo - {{text}}</p>'
})
export class JokeComponent {

  @Input('text') _text;   // Parametro della tag

  text: string;

  constructor() {
    console.log('JokeComponent Component constructor');
    this.text = 'Hello World';
  }

  ngAfterViewInit() {
    this.text = this._text;
  }
}
