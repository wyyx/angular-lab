import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialCollectionModule } from '../material-collection/material-collection.module'

@NgModule({
	exports: [ CommonModule, FormsModule, ReactiveFormsModule, MaterialCollectionModule ]
})
export class SharedModule {}
