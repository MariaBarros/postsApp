import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';

import { SharedModule } from '@shared/shared.module';


import { PostsListComponent } from './posts-list/posts-list.component';

import { PostsEditComponent } from './posts-edit/posts-edit.component';

import { PostsFormComponent } from './posts-form/posts-form.component';

import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCommentsComponent } from './post-comments/post-comments.component';


@NgModule({
  declarations: [
  	PostsListComponent, 
  	PostsEditComponent, 
  	PostsFormComponent, PostDetailComponent, PostCommentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule
  ],
  exports:[
  	PostsListComponent
  ]
})

export class PostsModule { }