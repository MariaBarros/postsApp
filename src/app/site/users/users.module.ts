import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
  	UsersListComponent
  ]
})

export class UsersModule { }
