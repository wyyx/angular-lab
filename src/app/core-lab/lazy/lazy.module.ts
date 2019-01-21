import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LazyRoutingModule } from './lazy-routing.module'
import { LazyHomeComponent } from './lazy-home/lazy-home.component'

@NgModule({
  imports: [CommonModule, LazyRoutingModule],
  declarations: [LazyHomeComponent]
})
export class LazyModule {}
