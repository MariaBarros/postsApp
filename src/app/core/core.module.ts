import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

/**
* Interceptors
**/
import { HttpInterceptorService } from './services/http.interceptor.service';

/** Http interceptor providers in outside-in order */
const httpInterceptorProviders = [

  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }

];



@NgModule({

  declarations: [],

  imports: [
    CommonModule,
    HttpClientModule
  ],

   providers: [  	
    httpInterceptorProviders
  ]

})


export class CoreModule { }