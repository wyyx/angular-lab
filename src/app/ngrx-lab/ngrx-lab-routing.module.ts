import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NgrxLabHomeComponent } from './ngrx-lab-home/ngrx-lab-home.component'

const routes: Routes = [ { path: 'ngrx-lab', component: NgrxLabHomeComponent } ]

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class NgrxLabRoutingModule {}
