import { NgModule } from '@angular/core';
import { JokeComponent } from './joke/joke';
import { JokeListComponent } from './joke-list/joke-list';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [JokeComponent,
    JokeListComponent],
	imports: [ CommonModule],
	exports: [JokeComponent,
    JokeListComponent]
})
export class ComponentsModule {}
