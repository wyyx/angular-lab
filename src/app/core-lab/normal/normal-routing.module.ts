import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NormalHomeComponent } from './normal-home/normal-home.component'

const routes: Routes = [
  {
    path: 'core-lab',
    children: [
      {
        path: 'normal',
        component: NormalHomeComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormalRoutingModule {}
