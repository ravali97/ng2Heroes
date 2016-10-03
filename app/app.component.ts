import {Component} from '@angular/core';

@Component({

	selector:'my-app',
	template:'' +
	'<h2> My {{title}} app</h2>'+
	'<my-heroes></my-heroes>'


})



export class AppComponent{

	title = 'Tour of Heroes';

}
