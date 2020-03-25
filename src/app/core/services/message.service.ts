/**
* This service save messages in a collection 
* and makes them availble in the whole application
**/

import { Injectable } from '@angular/core';

import { IMessage } from '@core/interfaces';

import { MessageType } from '@core/enums';


@Injectable({
  providedIn: 'root'
})

export class MessageService {

	messages: IMessage[] = [];

	constructor() { }

	/**
	* Add a success message to the messages collection
	* @param mess string: the message to show	
	* @param detail strin: additional information aboit the message
	**/

	addSuccess(mess: string, detail: string = '' ): void {
  	
    	this.messages.push({type: MessageType.Success, message: mess, detail: detail});
    
  	}

  	/**
	* Add an error message to the messages collection
	* @param mess string: the message to show	
	* @param detail strin: additional information aboit the message
	**/

  	addError(mess: string, detail: string = ''): void{		

		this.messages.push({type: MessageType.Error, message: mess, detail: detail});

  	}  	
 
  	clear(): void {

    	this.messages = [];

  	}
  
}