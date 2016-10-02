import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroComponent} from './hero.component';
import {HeroService} from './hero.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		HeroDetailComponent,
		HeroComponent
	],
	bootstrap: [
		AppComponent
	],
	providers:[
		HeroService
	]
})
export class AppModule {
}
