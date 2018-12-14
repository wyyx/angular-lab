import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormLabHomeComponent } from './form-lab-home/form-lab-home.component'

const routes: Routes = [ { path: 'form-lab', component: FormLabHomeComponent } ]

@NgModule({
	imports: [ CommonModule, RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class FormLabRoutingModule {}
