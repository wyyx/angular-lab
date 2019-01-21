import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CoreLabRoutingModule } from './core-lab-routing.module'
import { ChangeDetectionComponent } from './change-detection/change-detection.component'
import { SharedModule } from '../shared/shared.module'
import { ChangeDetectionChildComponent } from './change-detection-child/change-detection-child.component'
import { ExpressionChangedAfterCheckedErrorComponent } from './expression-changed-after-checked-error/expression-changed-after-checked-error.component'
import { ExpressionChangedAfterCheckedErrorTwoComponent } from './expression-changed-after-checked-error-two/expression-changed-after-checked-error-two.component'
import { ChildComponent } from './child/child.component'
import { ChangeDetectionGrandchildComponent } from './change-detection-grandchild/change-detection-grandchild.component'
import { CoreLabHomeComponent } from './core-lab-home/core-lab-home.component'
import { NormalModule } from './normal/normal.module'

@NgModule({
  imports: [CommonModule, CoreLabRoutingModule, SharedModule, NormalModule],
  declarations: [
    ChangeDetectionComponent,
    ChangeDetectionChildComponent,
    ChildComponent,
    ExpressionChangedAfterCheckedErrorComponent,
    ExpressionChangedAfterCheckedErrorTwoComponent,
    ChangeDetectionGrandchildComponent,
    CoreLabHomeComponent
  ]
})
export class CoreLabModule {}
