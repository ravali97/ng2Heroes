import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeroComponent} from './hero/hero.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";


const appRoutes: Routes = [

	{
		path: 'heroes',
		component: HeroComponent
	},
	{
		path:'detail/:id',
		component:HeroDetailComponent

	},
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	}


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);