import { Component, OnInit, forwardRef } from '@angular/core'

export abstract class NarrowFather {
	title: string
}

export interface Exercise {
	run(): void
	walk(): void
}

@Component({
	selector: 'app-father',
	templateUrl: './father.component.html',
	styleUrls: [ './father.component.scss' ],
	providers: [ { provide: NarrowFather, useExisting: forwardRef(() => FatherComponent) } ]
})
export class FatherComponent implements OnInit, NarrowFather {
	title: string = 'I am FatherComponent'
	id: string = 'vgserhsetjnhxfgbawerhaesthjaetjh'

	constructor() {}

	ngOnInit() {}
}
