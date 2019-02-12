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
import { NgTemplateComponent } from './ng-template/ng-template.component'
import { NgTemplateOutletComponent } from './ng-template/ng-template-outlet/ng-template-outlet.component'
import { CardOrListViewComponent } from './ng-template/ng-template-outlet/card-or-list-view/card-or-list-view.component'
import { CardItemDirective } from './ng-template/ng-template-outlet/card-item.directive'
import { ListItemDirective } from './ng-template/ng-template-outlet/list-item.directive'
import { fooDirective } from './directive/foo.directive'
import { DirectiveParentComponent } from './directive/directive-parent.component'
import { DirectiveChildComponent } from './directive/directive-child.component'
import { ViewEncapsulationParentComponent } from './view-encapsulation/view-encapsulation-parent/view-encapsulation-parent.component'
import { ViewEncapsulationUncleComponent } from './view-encapsulation/view-encapsulation-uncle/view-encapsulation-uncle.component'
import { ViewEncapsulationChildComponent } from './view-encapsulation/view-encapsulation-parent/view-encapsulation-child/view-encapsulation-child.component'
import { ViewEncapsulationChild2Component } from './view-encapsulation/view-encapsulation-parent/view-encapsulation-child2/view-encapsulation-child2.component'
import { HelloWorldComponent } from './ng-template/hello-world/hello-world.component'
import { DynamicComponent } from './ng-template/dynamic/dynamic.component'
import { NgComponentOutletComponent } from './ng-template/ng-component-outlet/ng-component-outlet.component'
@NgModule({
  imports: [CommonModule, CoreLabRoutingModule, SharedModule, NormalModule],
  declarations: [
    ChangeDetectionComponent,
    ChangeDetectionChildComponent,
    ChildComponent,
    ExpressionChangedAfterCheckedErrorComponent,
    ExpressionChangedAfterCheckedErrorTwoComponent,
    ChangeDetectionGrandchildComponent,
    CoreLabHomeComponent,
    NgTemplateComponent,
    CardOrListViewComponent,
    NgTemplateOutletComponent,
    CardItemDirective,
    ListItemDirective,
    fooDirective,
    DirectiveParentComponent,
    DirectiveChildComponent,
    ViewEncapsulationParentComponent,
    ViewEncapsulationUncleComponent,
    ViewEncapsulationChildComponent,
    ViewEncapsulationChild2Component,
    DynamicComponent,
    HelloWorldComponent,
    NgComponentOutletComponent
  ],
  entryComponents: [HelloWorldComponent]
})
export class CoreLabModule {}
