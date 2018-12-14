import { NgModule } from '@angular/core'
import { SimpleReactiveFormComponent } from './simple-reactive-form/simple-reactive-form.component'
import { SharedModule } from '../shared/shared.module'
import { FormLabRoutingModule } from './form-lab-routing.module';
import { NgxJquerySliderComponent } from './ngx-jquery-slider/ngx-jquery-slider.component';
import { FormLabHomeComponent } from './form-lab-home/form-lab-home.component';
import { NgxJquerySliderParentComponent } from './ngx-jquery-slider-parent/ngx-jquery-slider-parent.component'

@NgModule({
	imports: [ SharedModule, FormLabRoutingModule ],
	declarations: [ SimpleReactiveFormComponent, NgxJquerySliderComponent, FormLabHomeComponent, NgxJquerySliderParentComponent ]
})
export class FormLabModule {}
