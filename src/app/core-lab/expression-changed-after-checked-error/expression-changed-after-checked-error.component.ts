import { Component, OnInit, NgZone } from '@angular/core'

@Component({
	selector: 'app-expression-changed-after-checked-error',
	template: `
        <h3>
            Change detection is triggered at:
            <span [textContent]="time | date:'hh:mm:ss:SSS'"></span>
        </h3>
        <button (click)="0">Trigger Change Detection</button>
    `
})
export class ExpressionChangedAfterCheckedErrorComponent implements OnInit {
	ngOnInit(): void {}

	_time
	get time() {
		return this._time
	}

	constructor(zone: NgZone) {
		zone.runOutsideAngular(() => {
			setInterval(() => {
				this._time = Date.now()
			}, 1)
		})
	}
}
