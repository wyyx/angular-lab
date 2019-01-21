import { Component, OnInit, DoCheck, OnChanges } from '@angular/core'

@Component({
	selector: 'app-change-detection-grandchild',
	templateUrl: './change-detection-grandchild.component.html',
	styleUrls: [ './change-detection-grandchild.component.scss' ]
})
export class ChangeDetectionGrandchildComponent implements OnInit, DoCheck, OnChanges {
	ngDoCheck(): void {
		console.log('ChangeDetectionGrandchildComponent - ngDoCheck')
	}

	ngOnChanges() {
		console.log('ChangeDetectionGrandchildComponent - ngOnChanges')
	}
	constructor() {}

	ngOnInit() {}
}
