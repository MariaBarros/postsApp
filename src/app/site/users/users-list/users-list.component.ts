import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FacadeService } from '@core/services';

import { UsersModuleStates } from '../module.states';

import { State } from '@core/entities';

import { IUser } from '@core/interfaces';

import { ApiRoutes } from '@core/enums'; 


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {

	@Output() select: EventEmitter<IUser>= new EventEmitter<IUser>();

	public state: State;

	public users: IUser[];

	public userSelected: IUser;


  	constructor(private facadeService: FacadeService, private states: UsersModuleStates) { }


  	ngOnInit() {

  		this.state = this.states.usersState;        	
    	
    	/*Check if the state collection is empty*/
    	if(this.state.isEmpty === true){

      		this.facadeService.loadCollection(ApiRoutes.Users, this.state);       		

    	}else{

    		this.users = this.state.collection.items;

    	}


    	/*Watch changest for the users list*/
    	this.state.isUpdating$.subscribe((updating: boolean) => {

      		if(updating === false){

      			this.users = this.state.collection.items;      			

      		}

      	});     

  	}


  	/**Emit event to the container
  	* @param id number: user id
  	**/

  	emitFilter(user:IUser){

  		this.userSelected = user;

  		this.select.emit(this.userSelected);
  	}


  	/**Clear filter and emit event to the container  	
  	**/

  	clearFilter(){  

  		this.userSelected = null;

  		this.select.emit(this.userSelected);

  	}

}