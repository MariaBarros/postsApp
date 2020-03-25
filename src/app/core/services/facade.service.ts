import { Injectable } from '@angular/core';

import { State } from '@core/entities';

import { ApiService } from '@core/services/api.service'; 


@Injectable({
  providedIn: 'root'
})

export class FacadeService {

	constructor(private apiService: ApiService) { }

  
	/**
  Set data to the state's collection
  * @param stateManager StateClass object
  * @param route string: the api route
  */
	loadCollection(route: string, stateManager: State): void{

   	stateManager.startAction();

   	this.apiService.get(route)
   		.then( result => stateManager.setCollection(result))
   		.catch( err => stateManager.setError());

  }



  	/**
  	Add or update an item in the state's collection
    * @param route string: the api route
  	* @param item Model object
  	* @param stateManager StateClass object
  	*/
  	updateCollection(route: string, item: any, stateManager: State){

    	if(item.id){

      		this.update(route, item, stateManager);

      		return;

    	}

    	this.create(route, item, stateManager);

  	}




  	/**
  	Delete an item in the state's collection
  	* @param stateManager StateClass object
    * @param item Model object
  	* @param route string: the api route
  	*/
  	async delete(route: string, item: any, stateManager: State){

  		try{

  			stateManager.startAction();
    
    		const response = await this.apiService.delete(`${route}/item.id`);         

        stateManager.collection.removeItem(item);

        stateManager.endAction();

    		return true;

  		}catch(err){

  			stateManager.setError();

  			return false;

  		}

  	}


  	/**
  	Optimistic update: update UI state first and wait for the api response
  	* @param stateManager StateClass object
  	* @param item Model object
    * @param route string: the api route
  	*/
  	private create(route: string,item: any, stateManager: State):void{    

    	stateManager.collection.addItem(item);

    	//If success, update the state. If error, we need to rollback the state change 

    	this.apiService.post(route, item)
    		.then((addedItemWithId: number) => stateManager.collection.updateItemId(item, addedItemWithId))
    		.catch(err => {
          stateManager.setError();
          stateManager.collection.removeItem(item)
        });

  	}

  

  /**
  Pessimistic update. Call API and then update UI state
  * @param stateManager StateClass object
  * @param item Model object
  * @param route string: the api route
  */
  private update(route: string,item: any, stateManager: State): void{    

    stateManager.startAction();

    this.apiService.put(route, item)
    	.then(() => {

    		stateManager.collection.updateItem(item);

    		stateManager.endAction();

    	})
    	.catch(err => stateManager.setError() );
    
  } 

}