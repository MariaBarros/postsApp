import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';

import { HomeComponent } from './home/home.component';

import { SharedModule } from '@shared/shared.module';

import { UsersModule } from '@features/site/users/users.module';

import { PostsModule } from '@features/site/posts/posts.module';
import { MessagesComponent } from './messages/messages.component';



@NgModule({

  declarations: [HomeComponent, MessagesComponent],

  imports: [

    CommonModule,

    SharedModule,
    
    UsersModule,

    PostsModule,

    SiteRoutingModule

  ]
})


export class SiteModule { }