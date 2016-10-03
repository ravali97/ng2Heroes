import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {HeroComponent} from './hero.component';
import {DashboardComponent} from './dashboard.component';


const appRoutes :Routes =[

	{
		path:'heroes',
		component:HeroComponent
	},
	{
		path:'',
		redirectTo:'/dashboard',
		pathMatch:'full'
	}


];

export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);