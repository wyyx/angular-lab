import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ThirdPartyLabHomeComponent } from './third-party-lab-home/third-party-lab-home.component'
import { ThirdPartyLabRoutingModule } from './third-party-lab-routing.module'

@NgModule({
  imports: [CommonModule, ThirdPartyLabRoutingModule],
  declarations: [ThirdPartyLabHomeComponent]
})
export class ThirdPartyLabModule {}
