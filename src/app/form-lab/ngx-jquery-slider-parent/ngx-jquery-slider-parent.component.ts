import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatSlideToggleChange } from '@angular/material/slide-toggle'

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
	}

	onToggleChange(event: MatSlideToggleChange) {
		if (event.checked) {
			console.log('Slider Disabled')
			this.sliderFormControl.disable()
		} else {
			console.log('Slider Enabled')
			this.sliderFormControl.enable()
		}
	}
}
