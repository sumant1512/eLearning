import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { HomeModule } from '../+home/home.module';


@NgModule({
  declarations: [SuperAdminComponent],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    HomeModule
  ]
})
export class SuperAdminModule { }
