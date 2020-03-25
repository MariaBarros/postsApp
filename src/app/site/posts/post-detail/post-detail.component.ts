import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ApiService } from '@core/services';

import { IPost, IComment } from '@core/interfaces';

import { ApiRoutes } from '@core/enums';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})

export class PostDetailComponent implements OnInit {	

	public post: IPost;

	public comments: IComment[];


  	constructor(
  		private route: ActivatedRoute, 
  		private apiService: ApiService) { }


  	ngOnInit() {  		

  		const id = this.route.snapshot.paramMap.get('id'); 

  		this.loadPost(id);

  		this.loadComments(id);

  	}

  	loadPost(id: string){  		

	   	this.apiService.get(`${ApiRoutes.Posts}/${id}`)

	   		.then(post => {

	   			this.post = post;	   			

	   		});
	   	

  	}


  	loadComments(id: string){

  	   	this.apiService.get(`${ApiRoutes.Posts}/${id}/comments`)

	   		.then(comments => {	   			

	   			this.comments = comments;

	   		})
	   		.catch(err => this.comments =[]);

	   	

  	}  	

}