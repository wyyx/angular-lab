import { Component, OnInit, Input, DoCheck, AfterViewChecked } from '@angular/core'
import { ExpressionChangedAfterCheckedErrorTwoComponent } from '../expression-changed-after-checked-error-two/expression-changed-after-checked-error-two.component'

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit, DoCheck, AfterViewChecked {
	ngDoCheck(): void {
		console.log('ChildComponent - ngDoCheck')
	}

	ngAfterViewInit(): void {
		console.log('ChildComponent - AfterViewInit')
	}

	ngAfterViewChecked(): void {
		console.log('ChildComponent - AfterViewChecked')
	}

	@Input() number
	constructor(private parent: ExpressionChangedAfterCheckedErrorTwoComponent) {}

	ngOnInit() {
		console.log('ChildComponent - ngOnInit', 'change this.parent._number to 666666')

		this.parent._number = 666666
	}
}
