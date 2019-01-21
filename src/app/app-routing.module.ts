import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'

const routes: Routes = [{ path: '**', component: PageNotFoundComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
