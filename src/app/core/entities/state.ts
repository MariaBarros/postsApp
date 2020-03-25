import { BehaviorSubject, Observable } from 'rxjs';

import { Collection } from '@core/entities/collection';


export class State {

	private updating$: BehaviorSubject<boolean>;  

	private stateCollection: Collection; 

  public hasError: boolean; 

  constructor() { 

  	this.updating$ = new BehaviorSubject<boolean>(false);        

  	this.stateCollection = new Collection();    

  }
    	

  /**
  Get the collection for add/update/delete an item
  */
  get collection(): Collection{

   	return this.stateCollection;

  }

  /**
  Chech if the collection is empty
  * @param route string: api route
  */
  get isEmpty():boolean{

    return this.stateCollection.items.length === 0;

  }

  /**
  Watch the collection's updating state
  */  
  get isUpdating$(): Observable<boolean> {

   	return this.updating$.asObservable(); 

  }

  /**
  Set data to the collection
  * @param items objects array
  */
  setCollection(items: any): void{    

	  this.stateCollection.set(items);  

    this.endAction();  

  }


  /**
  Set error when it ocurrs
  */
  setError(): void{    

    this.hasError = true;  

    this.endAction();  

  }

  /**
  Change the state of updating to true
  */
  startAction(){

    this.hasError = false;

    this.updating$.next(true);

  }

  /**
  Change the state of updating to false
  */
  endAction(){

    this.updating$.next(false);

  }  

}