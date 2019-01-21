import { Component, DoCheck, AfterViewChecked } from '@angular/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements DoCheck, AfterViewChecked {
	ngAfterViewChecked(): void {
		// console.log('AppComponent - AfterViewChecked')
	}
	ngDoCheck(): void {
		// console.log('AppComponent - ngDoCheck')
	}
	title = 'angular-lab'
}
