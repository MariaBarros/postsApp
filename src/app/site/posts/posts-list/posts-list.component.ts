import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { FacadeService, MessageService } from '@core/services';

import { PostsModuleStates } from '../module.states';

import { State } from '@core/entities';

import { IPost } from '@core/interfaces';

import { ApiRoutes } from '@core/enums'; 

import { DeleteItemComponent } from '@shared/components/delete-item/delete-item.component';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})


export class PostsListComponent implements OnInit {	

	@ViewChild(DeleteItemComponent) deleteItemComp: DeleteItemComponent;

	@Output() view: EventEmitter<IPost>= new EventEmitter<IPost>();


	public state: State;

	public posts: IPost[];

	public postSelected: IPost;


  	constructor(
  		private facadeService: FacadeService, 
  		private messageService: MessageService, 
  		private states: PostsModuleStates) {  		

  	}

  	get titleSelected():string{

  		return this.postSelected ? this.postSelected.title : '';
  	}


  	ngOnInit() {

  		this.state = this.states.postsState;        	
    	
    	/*Check if the state collection is empty*/
    	if(this.state.isEmpty === true){

      		this.getPosts(ApiRoutes.Posts);

    	}else{

    		this.posts = this.state.collection.items;

    	}


    	/*Watch changest for the posts list*/
    	this.state.isUpdating$.subscribe((updating: boolean) => {

      		if(updating === false){

      			this.posts = this.state.collection.items;      			

      		}

      	}); 


  	}  	


  	/**
  	* Get the filtered or complete posts collection
  	* @param route string: in this case can be /posts or user/{{id}}/posts
  	**/
  	public getPosts(route: string){  	

  		this.facadeService.loadCollection(route, this.state);  

  	}

  	/**
  	* Get confirmation to delete the selected post
  	* @param post IPost: the selected post
  	**/
  	public confirmDelete(post: IPost){  	

  		this.postSelected = post;

  		this.deleteItemComp.show = true;

  	}

  	/**
  	* Emit event to show post detail
  	* @param post IPost: the selected post
  	**/
  	public showDetail(post: IPost){  		

  		this.view.emit(post);

  	}



  	/**
  	* The user has confirmed to delete the selected post
  	* @param confirmed boolean
  	**/
  	public async deletePost(confirmed: boolean){

  		const deleted = await this.facadeService.delete(ApiRoutes.Posts,this.postSelected, this.state);

  		if(deleted === true){

  			this.messageService.addSuccess(`The post was succefully deleted`);

  		}

  	}

}