import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LazyHomeComponent } from './lazy-home/lazy-home.component'

const routes: Routes = [{ path: '', component: LazyHomeComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}
