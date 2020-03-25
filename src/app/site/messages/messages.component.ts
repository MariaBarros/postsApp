import { Component, OnInit } from '@angular/core';

import { MessageService } from '@core/services';

import { MessageType } from '@core/enums';

import { IMessage } from '@core/interfaces';



@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {

  constructor(public messenger: MessageService) { }

  isError(message: IMessage):boolean{

  	return message.type === MessageType.Error;

  }

  isSuccess(message: IMessage):boolean{

  	return message.type === MessageType.Success;
  	
  }

  ngOnInit() {
  }

}
