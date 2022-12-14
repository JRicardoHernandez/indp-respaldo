import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { ComponentsModule } from '../../../@components/components.module';

import { InfAInsuredSeizuresAbandRoutingModule } from './inf-a-insured-seizures-aband-routing.module';
import { InfAInsuredSeizuresAbandDetailComponent } from './inf-a-insured-seizures-aband-detail/inf-a-insured-seizures-aband-detail.component';
import { InfAInsuredSeizuresAbandListComponent } from './inf-a-insured-seizures-aband-list/inf-a-insured-seizures-aband-list.component';


@NgModule({
  declarations: [
    InfAInsuredSeizuresAbandDetailComponent,
    InfAInsuredSeizuresAbandListComponent
  ],
  imports: [
    CommonModule,
    InfAInsuredSeizuresAbandRoutingModule,
    ComponentsModule
  ]
})
export class InfAInsuredSeizuresAbandModule { }
