import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	DoCheck,
	OnChanges,
	AfterViewChecked
} from '@angular/core'
import { Observable } from 'rxjs'

@Component({
	selector: 'app-change-detection-child',
	templateUrl: './change-detection-child.component.html',
	styleUrls: [ './change-detection-child.component.scss' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionChildComponent implements OnInit, DoCheck, OnChanges, AfterViewChecked {
	ngDoCheck(): void {
		console.log('ChangeDetectionChildComponent - ngDoCheck')
	}

	ngOnChanges() {
		console.log('ChangeDetectionChildComponent - ngOnChanges')
	}

	ngAfterViewChecked(): void {
		console.log('ChangeDetectionChildComponent - AfterViewChecked')
	}

	@Input() data: Observable<any>
	foods: string[] = []

	constructor(private cd: ChangeDetectorRef) {}

	ngOnInit() {
		this.data.subscribe(food => {
			this.foods = [ ...this.foods, ...food ]

			// this.cd.markForCheck()
			// console.log('set mark')

			setTimeout(() => {
				console.log('set mark')
				this.cd.markForCheck()
			}, 5000)
		})
	}
}

// When OnPush strategy

// 1. When input property's outer-binding reference changed,
// the component trigger change detection (No matter what ChangeDetectionStrategy)

// 2. Manually mark the path from root to this component and
// its subtree for change detection
