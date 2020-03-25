export class Collection {

	private collection: any;


  	constructor() { 

    	this.collection = [];
    
  	}


  	/**
  	Get collection's items
  	*/
  	get items(){

    	return this.collection;

  	}  


  	/**
  	Set data to the collection
  	* @param items objects array
  	*/
  	set(items: any): void{

    	this.collection = items;

  	}  


  	/**
  	Add an item to the collection
  	* @param item object
  	*/
  	addItem(item: any): void{    

    	this.collection = [item, ...this.items];

  	}


  	/**
  	Update an item to the collection
  	* @param updatedItem object
  	*/
  	updateItem(updatedItem:any): void{

  		const items = this.items;    

  		const indexOfUpdated = items.findIndex(item => parseInt(item.id) === parseInt(updatedItem.id));
    
   		items[indexOfUpdated] = updatedItem;

    	this.collection = [...items];

  	}


  	/**
  	Update the id of an added item after commiting to the database
  	* @itemToReplace object
  	* @lastInsertId number
  	*/
  	updateItemId(itemToReplace: any, lastInsertId: number): void{    

  		const items = this.items;

   		const updatedItemIndex = items.findIndex(item => item === itemToReplace);

   		items[updatedItemIndex].id = lastInsertId;

    	this.collection = [...items];

  	}


  	/**
  	Remove an item
  	* @itemToRemove object
  	*/
  	removeItem(itemToRemove: any): void{     

    	const items = this.items.filter(item => item !== itemToRemove);      

    	this.collection = [...items];

  	}
}