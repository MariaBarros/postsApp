/**
* This service get, save and delete data throught jsonplaceholder API
* visit https://jsonplaceholder.typicode.com to see examples
**/

import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

	protected readonly API = "https://jsonplaceholder.typicode.com";


  	constructor(protected http: HttpClient) { }



  	/**
	* Get data from the API
	* @param url string
	* eg: 
		post/
		users/
		users/1/posts/
		posts/1


	* @return Promise object
	**/

  	get(url:string): Promise<any> {    

    	return this.http.get( `${this.API}/${url}`).toPromise();

  	}



	/**
	* Add data
	* @param url string
	* @param data object: data to add
	* eg: 
		post/
		users/		

	* @return Promise object
	**/

  	post(url: string, data): Promise<any> {

    	return this.http.post(`${this.API}/${url}`, data).toPromise();

  	}  



  	/**
	* Update data
	* @param url string
	* @param data object: data to add
	* eg: 
		post/
		users/		

	* @return Promise object
	**/

  	put(url: string, data): Promise<any> {

    	return this.http.put(`${this.API}/${url}`, data).toPromise();

  	}



  	/**
	* Delete data
	* @param url string
	* @param id number: object id to delete
	* eg: 
		post/1
		users/1		

	* @return Promise object
	**/

  	delete(url: string): Promise<any> {

    	return this.http.delete(`${this.API}/${url}`).toPromise();

  	}


}