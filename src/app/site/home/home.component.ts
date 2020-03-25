import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';

import { IPost, IUser } from '@core/interfaces';

import { PostsListComponent } from '@features/site/posts/posts-list/posts-list.component';

import { ApiRoutes } from '@core/enums'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

	@ViewChild(PostsListComponent) postListComp: PostsListComponent;

	public userSelected: IUser;

  	constructor(private router: Router) { }

  	ngOnInit() {  		

  	}


  	/**
  	* Delete filters and show all posts, or filter posts by user id
  	* @param user IUser: data from user list component event emitter
  	**/
  	filterPosts(user:IUser | null){

  		this.userSelected = user;  		

  		const postsRoute = (!user) ? ApiRoutes.Posts : `${ApiRoutes.Users}/${user.id}/${ApiRoutes.Posts}`;
  		
  		this.postListComp.getPosts(postsRoute);	

  	}


    newPost(){

      this.router.navigate(['site/posts/new']); 

    }


    showPostDetail(post: IPost){

      this.router.navigate([`site/posts/post/${post.id}`]); 

    }


}
