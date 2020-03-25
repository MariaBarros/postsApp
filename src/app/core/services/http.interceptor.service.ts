import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

import { finalize, tap } from 'rxjs/operators';

import { MessageService } from '@core/services';


@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService implements HttpInterceptor{

  constructor(private messenger: MessageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable< HttpEvent<any> > {      

      let error;      

      //Clear messages
      this.messenger.clear();      

      return next.handle(req).pipe(
        tap(            

          event => error = null,

          // Operation failed; error is an HttpErrorResponse
          (err: HttpErrorResponse) => this.errorHandler(err,req)

        )        

      );


  	}

  	private errorHandler(response, req: HttpRequest<any>){

  		if((response.status >= 400) ){

          const msg: string = (response.error) ? response.error.message : response.message;

          const detail: string = `${req.method} "${req.urlWithParams} failed.`;          

          this.messenger.addError(msg, detail);

        }
  	}
}
