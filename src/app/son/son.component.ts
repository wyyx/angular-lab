import { Component, OnInit, forwardRef, Host, SkipSelf, Optional } from '@angular/core'
import { NarrowFather, FatherComponent } from '../father/father.component'

@Component({
	selector: 'app-son',
	templateUrl: './son.component.html',
	styleUrls: [ './son.component.scss' ]
})
export class SonComponent implements OnInit {
	constructor(father: NarrowFather) {
		console.log('title:', father.title)
		// console.log('id:', father.id)
	}

	ngOnInit() {}
}
