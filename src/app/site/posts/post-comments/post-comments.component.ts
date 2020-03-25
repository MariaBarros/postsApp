import { Component, OnInit, Input } from '@angular/core';

import { IComment } from '@core/interfaces';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})

export class PostCommentsComponent implements OnInit {

	@Input() comments: IComment[];

	public show: boolean = false;
	

  	constructor() { }

  	ngOnInit() {

  		this.show = false;

  	}

}
