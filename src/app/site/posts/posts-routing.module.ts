import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { PostsEditComponent } from './posts-edit/posts-edit.component';

import { PostDetailComponent } from './post-detail/post-detail.component';


const routes: Routes = [
	{
   		path: 'new',
    	component: PostsEditComponent
  	},
  	{
   		path: 'post/:id',
    	component: PostDetailComponent
  	}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsRoutingModule { }
