import { Component, OnInit, DoCheck } from '@angular/core'

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: [ './child.component.scss' ]
})
export class ChildComponent implements OnInit, DoCheck {
	ngDoCheck(): void {
		console.log('ChildComponent - ngDoCheck')
	}

	constructor() {}

	ngOnInit() {}
}
