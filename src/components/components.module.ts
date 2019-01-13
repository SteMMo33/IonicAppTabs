import { NgModule } from '@angular/core';
import { JokeComponent } from './joke/joke';
import { JokeListComponent } from './joke-list/joke-list';
@NgModule({
	declarations: [JokeComponent,
    JokeListComponent],
	imports: [],
	exports: [JokeComponent,
    JokeListComponent]
})
export class ComponentsModule {}
