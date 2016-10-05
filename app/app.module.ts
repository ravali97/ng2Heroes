import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroComponent} from './hero/hero.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroService} from './hero.service';
import { routing } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		HeroDetailComponent,
		HeroComponent,
		DashboardComponent
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
