import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NgrxLabRoutingModule } from './ngrx-lab-routing.module'
import { NgrxLabHomeComponent } from './ngrx-lab-home/ngrx-lab-home.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [CommonModule, SharedModule, NgrxLabRoutingModule],
  declarations: [NgrxLabHomeComponent]
})
export class NgrxLabModule {}
