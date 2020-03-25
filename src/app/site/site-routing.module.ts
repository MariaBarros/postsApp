import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [

	  {
   		path: 'home',
    	component: HomeComponent
  	},
    {
      path: 'posts',    
      loadChildren: './posts/posts.module#PostsModule'
    },
  	{
    	path: '', 
    	redirectTo: 'home', 
    	pathMatch: 'full' 
  	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SiteRoutingModule { }
