import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/*Angular Naterial modules*/

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSortModule } from '@angular/material/sort';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatGridListModule } from '@angular/material/grid-list';

import { MatListModule } from '@angular/material/list';


import { MatMenuModule,  

  MatIconModule, 

  MatFormFieldModule, 

  MatSelectModule, 

  MatInputModule,

  MatButtonModule, 

  MatTableModule } from '@angular/material';


/*Module components*/

import { DeleteItemComponent } from './components/delete-item/delete-item.component';

import { HeaderComponent } from './components/header/header.component';

import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [DeleteItemComponent, HeaderComponent, LoadingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,    
    MatPaginatorModule,
    MatSortModule,    
    MatMenuModule,  
    MatIconModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule,     
    MatButtonModule, 
    MatTableModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatListModule
  ],
   exports: [
    FormsModule,
    ReactiveFormsModule, 
    HeaderComponent,
    DeleteItemComponent,
    LoadingComponent, 
    MatPaginatorModule,
    MatSortModule,    
    MatMenuModule,  
    MatIconModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule,     
    MatButtonModule, 
    MatTableModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatListModule
  ]
})

export class SharedModule { }