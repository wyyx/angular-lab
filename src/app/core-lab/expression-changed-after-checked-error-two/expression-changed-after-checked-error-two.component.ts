import { Component, OnInit, NgZone } from '@angular/core'

@Component({
	selector: 'app-expression-changed-after-checked-error-two',
	template: `
        <h3>
            Change detection is triggered:
            <span [textContent]="number"></span>
        </h3>
        <button (click)="0">Trigger Change Detection</button>
    `
})
export class ExpressionChangedAfterCheckedErrorTwoComponent implements OnInit {
	ngOnInit(): void {}

	_number

	get number() {
		// Problem
		this._number = Math.floor(Math.random() * 1000000)
		return this._number
	}

	constructor(zone: NgZone) {
		// // Solution
		// zone.runOutsideAngular(() => {
		// 	setInterval(() => {
		// 		this._number = Math.floor(Math.random() * 1000000)
		// 	}, 1)
		// })
	}
}
