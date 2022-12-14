import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { ThemeModule } from '../../../@theme/theme.module';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbWindowModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminModule } from '../admin.module';

import { LawyerRoutingModule } from './lawyer-routing.module';
import { LawyerDetailComponent } from './lawyer-detail/lawyer-detail.component';
import { LawyerListComponent } from './lawyer-list/lawyer-list.component';


@NgModule({
  declarations: [
    LawyerDetailComponent,
    LawyerListComponent
  ],
  imports: [
    CommonModule,
    LawyerRoutingModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class LawyerModule { }
