import {
	Component,
	OnInit,
	ViewChild,
	Input,
	Output,
	EventEmitter,
	forwardRef
} from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'

declare const $: any

@Component({
	selector: 'ngx-jquery-slider',
	template: `
      <div id="lo" #location></div>
  `,
	styles: [ 'div {width: 200px;}' ],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => NgxJquerySliderComponent),
			multi: true
		}
	]
})
export class NgxJquerySliderComponent implements ControlValueAccessor {
	@ViewChild('location') location

	widget
	propagateChange
	propagateTouched
	value

	ngOnInit() {
		this.widget = $(this.location.nativeElement).slider()

		this.widget.on('slidestart', (event, ui) => {
			this.propagateTouched()
		})

		this.widget.on('slidestop', (event, ui) => {
			this.propagateChange(ui.value)
		})
	}

	writeValue(obj: any): void {
		this.value = obj

		if (this.widget && this.value) {
			this.widget.slider('value', this.value)
		}
	}

	registerOnChange(fn: any): void {
		this.propagateChange = fn
	}

	registerOnTouched(fn: any): void {
		this.propagateTouched = fn
	}

	setDisabledState?(isDisabled: boolean): void {
		this.widget.slider({
			disabled: isDisabled
		})
	}
}
