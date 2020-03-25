import { Injectable } from '@angular/core';

import { State } from '@core/entities'; 


@Injectable({

  providedIn: 'root'

})

export class PostsModuleStates{
  
  private _postsState: State;  


  constructor() { }

  /**
  * Get users state manager
  **/

  get postsState(){    

    if(!this._postsState){

      this._postsState = new State(); 

    }

    return this._postsState;

  }  


}