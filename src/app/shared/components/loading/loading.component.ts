import { Component, OnInit, Input } from '@angular/core';

import { Observable} from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})

export class LoadingComponent implements OnInit {

  	@Input() loading$: Observable<boolean>;

  	@Input() properties: any;


    public loaderProperties: any;
  	
  	public showLoader: boolean;    


  	constructor() {

  		this.showLoader = true;      

  	}

  	ngOnInit() {

  		/**
  		* Loading properties
  		**/

  		const defaultProperties = {

  			color: 'primary',

  			mode: 'indeterminate',

  			diameter:30

  		}

      this.loaderProperties = Object.assign(defaultProperties, this.properties);     

  		this.loading$.subscribe(value => this.showLoader = value ); 

  	}

}
