import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DataTableLabHomeComponent } from './data-table-lab-home/data-table-lab-home.component'
import { MaterialCollectionModule } from '../material-collection/material-collection.module'
import { DataTableLabRoutingModule } from './data-table-lab-routing.module';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { PaginationTableComponent } from './pagination-table/pagination-table.component';
import { SortingTableComponent } from './sorting-table/sorting-table.component'

@NgModule({
  imports: [CommonModule, MaterialCollectionModule, DataTableLabRoutingModule],
  declarations: [DataTableLabHomeComponent, BasicTableComponent, PaginationTableComponent, SortingTableComponent]
})
export class DataTableLabModule {}
