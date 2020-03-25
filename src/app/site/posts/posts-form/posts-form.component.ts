import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { State } from '@core/entities';

import { IPost, IUser } from '@core/interfaces';

import { FacadeService, MessageService } from '@core/services';

import { ApiRoutes } from '@core/enums';



@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.scss']
})

export class PostsFormComponent implements OnInit {

	@Input() state: State;

	@Input() users: IUser[];

	@Input() post: IPost;

	public postForm: FormGroup;  


  	constructor(
  		private router: Router,
  		private formBuilder: FormBuilder, 
  		private facadeService: FacadeService,
      private messageService: MessageService) { }


  	ngOnInit() {

  		//Build the form
      	this.postForm = this.formBuilder.group({

	        id: [ this.post.id ],
	        
	        userId: [this.post.userId, Validators.required ],        

	        title: [ this.post.title, Validators.required  ],

	        body: [ this.post.body , Validators.required ]        

	    });

  	}

  	//access to form fields
    get f() { return this.postForm.controls; }


    //Submit post data
  	public async submit(){

  		if(this.postForm.valid === false){

  			return;

  		}
  	  
      Object.assign(this.post, this.postForm.value);      

      const saved = await this.facadeService.updateCollection(ApiRoutes.Posts, this.post, this.state);

      if(this.state.hasError === false){

        this.messageService.addSuccess("The post was added succefuly");

      }

      

	    this.goHome();      

  	}


  	public goHome(){

  		this.router.navigate(['site/home']); 

  	}

}