import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CoreLabHomeComponent } from './core-lab-home/core-lab-home.component'

const routes: Routes = [
  {
    path: 'core-lab',
    component: CoreLabHomeComponent,
    children: [
      {
        path: 'lazy',
        loadChildren: './lazy/lazy.module#LazyModule'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreLabRoutingModule {}
