import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SuiModule } from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SuiModule
  ]
})
export class HomeModule { }
