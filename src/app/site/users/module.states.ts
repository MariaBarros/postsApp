import { Injectable } from '@angular/core';

import { State } from '@core/entities'; 


@Injectable({

  providedIn: 'root'

})

export class UsersModuleStates{
  
  private _usersState: State;  


  constructor() { }

  /**
  * Get users state manager
  **/

  get usersState(){    

    if(!this._usersState){

      this._usersState = new State();      

    }

    return this._usersState;

  }  

}