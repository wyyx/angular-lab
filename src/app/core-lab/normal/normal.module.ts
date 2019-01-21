import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NormalRoutingModule } from './normal-routing.module'
import { NormalHomeComponent } from './normal-home/normal-home.component'

@NgModule({
  imports: [CommonModule, NormalRoutingModule],
  declarations: [NormalHomeComponent]
})
export class NormalModule {}
