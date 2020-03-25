import { Component, OnInit} from '@angular/core';

import { IPost, IUser } from '@core/interfaces';

import { State } from '@core/entities';

import { PostsModuleStates } from '../module.states';

import { ApiService } from '@core/services';

import { ApiRoutes } from '@core/enums';


@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.scss']
})

export class PostsEditComponent implements OnInit {

	public users: IUser[];	

	public post: IPost;	

	public state: State;


  	constructor(private apiService: ApiService, private states: PostsModuleStates) { }

  	ngOnInit() {  		

  		this.state = this.states.postsState;
  		
  		this.apiService.get(ApiRoutes.Users)
  			.then(users => this.users = users)
  			.catch(err => this.users = []);

  	}  	

}
