import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbSelectModule, NbInputModule, NbWindowModule} from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../../@components/components.module';
import { MunicipalitysRoutingModule } from './municipalitys-routing.module';
import { MunicipalityDetailComponent } from './municipality-detail/municipality-detail.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MunicipalityListComponent } from './municipality-list/municipality-list.component';


@NgModule({
  declarations: [
    MunicipalityListComponent,
    MunicipalityDetailComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    CommonModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbSelectModule,
    NbButtonModule,
    NbInputModule,
    NbWindowModule.forChild(),
    MunicipalitysRoutingModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MunicipalitysModule { }
