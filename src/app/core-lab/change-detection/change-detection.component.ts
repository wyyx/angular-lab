import { Component, OnInit, DoCheck } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Component({
	selector: 'app-change-detection',
	templateUrl: './change-detection.component.html',
	styleUrls: [ './change-detection.component.scss' ]
})
export class ChangeDetectionComponent implements OnInit, DoCheck {
	ngDoCheck(): void {
		console.log('ChangeDetectionComponent - ngDoCheck')
	}

	constructor() {}

	ngOnInit() {}

	foods = new BehaviorSubject([ 'Bacon', 'Letuce', 'Tomatoes' ])

	addFood(food) {
		this.foods.next(food)

		// this.foods = new BehaviorSubject([ 'Bacon', 'Letuce', 'Tomatoes', food ])
	}
}
