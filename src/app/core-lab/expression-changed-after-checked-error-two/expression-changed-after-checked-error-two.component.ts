import { Component, OnInit, NgZone, DoCheck, AfterViewChecked, AfterViewInit } from '@angular/core'

@Component({
	selector: 'app-expression-changed-after-checked-error-two',
	template: `
        <h3>
            Change detection is triggered:
            <app-child [number]="_number"></app-child>
        </h3>
        <button (click)="0">Trigger Change Detection</button>
    `
})
export class ExpressionChangedAfterCheckedErrorTwoComponent
	implements OnInit, DoCheck, AfterViewChecked, AfterViewInit {
	ngAfterViewInit(): void {
		console.log('ExpressionChangedAfterCheckedErrorTwoComponent - AfterViewInit')
	}

	ngAfterViewChecked(): void {
		console.log('ExpressionChangedAfterCheckedErrorTwoComponent - AfterViewChecked')
	}

	ngDoCheck(): void {
		console.log('ExpressionChangedAfterCheckedErrorTwoComponent - ngDoCheck')
	}

	ngOnInit(): void {}

	_number = 333

	// get number() {
	// 	// Problem
	// 	this._number = Math.floor(Math.random() * 1000000)
	// 	console.log('this._number', this._number)

	// 	return this._number
	// }

	constructor(zone: NgZone) {
		// // Solution
		// zone.runOutsideAngular(() => {
		// 	setInterval(() => {
		// 		this._number = Math.floor(Math.random() * 1000000)
		// 	}, 1)
		// })
	}
}
