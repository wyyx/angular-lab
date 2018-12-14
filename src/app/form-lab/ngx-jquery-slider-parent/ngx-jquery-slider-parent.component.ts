import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
	selector: 'app-ngx-jquery-slider-parent',
	templateUrl: './ngx-jquery-slider-parent.component.html',
	styleUrls: [ './ngx-jquery-slider-parent.component.scss' ]
})
export class NgxJquerySliderParentComponent implements OnInit {
	sliderFormControl = new FormControl(50)

	constructor() {}

	ngOnInit() {
		this.sliderFormControl.valueChanges.subscribe(v => {
			console.log('v', v)
			console.log('touched', this.sliderFormControl.touched)
		})

		setTimeout(() => {
			console.log('slider disabled!')
			this.sliderFormControl.disable()
		}, 5000)
	}
}
