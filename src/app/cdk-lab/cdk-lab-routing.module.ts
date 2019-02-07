import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommonModule } from '@angular/common'
import { CdkLabHomeComponent } from './cdk-lab-home/cdk-lab-home.component'

const routes: Routes = [{ path: 'cdk-lab', component: CdkLabHomeComponent }]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkLabRoutingModule {}
