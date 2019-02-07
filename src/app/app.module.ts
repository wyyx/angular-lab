import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module'
import { FormLabModule } from './form-lab/form-lab.module'
import { CoreLabModule } from './core-lab/core-lab.module'
import { NgrxLabModule } from './ngrx-lab/ngrx-lab.module'
import { StoreModule } from '@ngrx/store'
import { Router } from '@angular/router'
import { TableLabModule } from './table-lab/table-lab.module'
import { CdkLabModule } from './cdk-lab/cdk-lab.module'
import { ThirdPartyLabModule } from './third-party/third-party-lab.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FormLabModule,
    CoreLabModule,
    NgrxLabModule,
    TableLabModule,
    CdkLabModule,
    ThirdPartyLabModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // // Diagnostic only: inspect router configuration
  // constructor(router: Router) {
  //   // Use a custom replacer to display function names in the route configs
  //   const replacer = (key, value) => (typeof value === 'function' ? value.name : value)
  //   console.log('Routes: ', JSON.stringify(router.config, replacer, 2))
  // }
}
