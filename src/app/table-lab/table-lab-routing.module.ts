import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { TableLabHomeComponent } from './table-lab-home/table-lab-home.component'

const routes: Routes = [{ path: 'data-table-lab', component: TableLabHomeComponent }]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableLabRoutingModule {}
