import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialCollectionModule } from '../material-collection/material-collection.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
	declarations: [ PageNotFoundComponent ],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialCollectionModule,
		BrowserAnimationsModule,
		PageNotFoundComponent
	]
})
export class SharedModule {}
