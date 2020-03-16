# PostsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Workflow
1. Creating the app `ng new postsApp --style=scss --routung=true` 	
2. Adding angular material `ng add @angular/material `
3. Creating app's architecture
````
	ng g m core // the app core for entities, enums, services

	ng g m shared // the modules and components shared

	ng g m site // the module of app features

````
4. Creating data managers services
````
	ng g s core/services/api // the api service

	ng g m core/services/facade // the service to manage states	

````

5. Defining interfaces and enums
````
	ng g i core/interfaces/user

	ng g i core/iterfaces/post

	ng g i core/iterfaces/comment

	ng g i core/iterfaces/address

	ng g i core/iterfaces/company

	ng g e core/enums // define the api routes and the messages types

````

6. Defining Error Handlers
````
	ng g s core/services/message

	ng g s core/services/httpInterceptor //Interceptor to manage HTTP errors

````

7. Creating Core Entities
````
	ng g class core/entities/state // Entity for state managers

	ng g class core/entities/collection // Entity for state managers collection

````
8. Updating tsconfig.js file
````
"compilerOptions": {
    "baseUrl": "./src",
    ...
    "module": "esnext",
    
    ...
    "paths": {
      "@env/*": ["environments/*"],
      "@shared/*": ["app/shared/*"],
      "@core/*": ["app/core/*"],
      "@features/*": ["app/*"]      
    }
  }
  ````
9. Defining CSS rules in ``./style.scss`` and ``./styles/...``

10. Creating the user module and its components ``ng g m site/users``

11. Creating the posts module and its components ``ng g m site/posts --routing=true``

12. Updating app routes

13. Listing users

14. Listing posts

15. Filtering posts

14. Adding post

15. Show post detail


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
