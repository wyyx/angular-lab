import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
	selector: 'app-simple-reactive-form',
	templateUrl: './simple-reactive-form.component.html',
	styleUrls: [ './simple-reactive-form.component.scss' ]
})
export class SimpleReactiveFormComponent implements OnInit {
	myForm: FormGroup

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.myForm = this.formBuilder.group({
			name: '',
			email: '',
			message: ''
		})

		this.onChanges()
	}

	onChanges(): void {
		this.myForm.valueChanges.subscribe(val => {
			console.log('from valueChanges', val)
		})
	}

	onClick(name) {
		console.log('before', this.myForm.value)

		name.value = 'houdini'

		console.log('after', this.myForm.value)
	}
}
