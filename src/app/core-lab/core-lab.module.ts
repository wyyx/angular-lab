import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CoreLabRoutingModule } from './core-lab-routing.module'
import { ChangeDetectionComponent } from './change-detection/change-detection.component'
import { SharedModule } from '../shared/shared.module'
import { ChildComponent } from './child/child.component'
import { ChangeDetectionChildComponent } from './change-detection-child/change-detection-child.component';
import { ExpressionChangedAfterCheckedErrorComponent } from './expression-changed-after-checked-error/expression-changed-after-checked-error.component';
import { ExpressionChangedAfterCheckedErrorTwoComponent } from './expression-changed-after-checked-error-two/expression-changed-after-checked-error-two.component'

@NgModule({
	imports: [ CommonModule, CoreLabRoutingModule, SharedModule ],
	declarations: [ ChangeDetectionComponent, ChangeDetectionChildComponent, ChildComponent, ExpressionChangedAfterCheckedErrorComponent, ExpressionChangedAfterCheckedErrorTwoComponent ]
})
export class CoreLabModule {}
