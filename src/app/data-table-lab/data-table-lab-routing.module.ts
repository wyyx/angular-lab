import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { DataTableLabHomeComponent } from './data-table-lab-home/data-table-lab-home.component'

const routes: Routes = [{ path: 'data-table-lab', component: DataTableLabHomeComponent }]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableLabRoutingModule {}
