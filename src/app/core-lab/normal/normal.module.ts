import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NormalRoutingModule } from './normal-routing.module'
import { NormalHomeComponent } from './normal-home/normal-home.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [CommonModule, NormalRoutingModule, HttpClientModule],
  declarations: [NormalHomeComponent]
})
export class NormalModule {}
