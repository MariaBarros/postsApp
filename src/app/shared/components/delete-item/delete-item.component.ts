import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})

export class DeleteItemComponent implements OnInit {

  @Output() response: EventEmitter<boolean> = new EventEmitter<boolean>();

  public show:boolean;


  constructor() { }

  ngOnInit() { 

  	this.show = false;

  }


  /**
  * The user confirm delete the item. Emit event to delete
  **/
  delete(){

  	this.response.emit(true);

  	this.close();

  }

  /**
  * The user cancel delete the item
  **/
  close(){

  	this.show = false;

  }

}