import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ChangeDetectionComponent } from './change-detection/change-detection.component'
import { ExpressionChangedAfterCheckedErrorComponent } from './expression-changed-after-checked-error/expression-changed-after-checked-error.component'
import { ExpressionChangedAfterCheckedErrorTwoComponent } from './expression-changed-after-checked-error-two/expression-changed-after-checked-error-two.component'

const routes: Routes = [
	{ path: 'core-lab', component: ExpressionChangedAfterCheckedErrorTwoComponent }
]

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class CoreLabRoutingModule {}
