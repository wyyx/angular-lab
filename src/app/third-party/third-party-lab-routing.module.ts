import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ThirdPartyLabHomeComponent } from './third-party-lab-home/third-party-lab-home.component'

const routes: Routes = [
  {
    path: 'third-party-lab',
    component: ThirdPartyLabHomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThirdPartyLabRoutingModule {}
