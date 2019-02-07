import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialCollectionModule } from '../material-collection/material-collection.module'
import { TableLabRoutingModule } from './table-lab-routing.module'
import { BasicTableComponent } from './basic-table/basic-table.component'
import { PaginationTableComponent } from './pagination-table/pagination-table.component'
import { SortingTableComponent } from './sorting-table/sorting-table.component'
import { TableLabHomeComponent } from './table-lab-home/table-lab-home.component'

@NgModule({
  imports: [CommonModule, MaterialCollectionModule, TableLabRoutingModule],
  declarations: [
    TableLabHomeComponent,
    BasicTableComponent,
    PaginationTableComponent,
    SortingTableComponent
  ]
})
export class TableLabModule {}
