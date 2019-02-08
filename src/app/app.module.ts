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
import { ThirdPartyLabModule } from './third-party-lab/third-party-lab.module'
import { FlatpickrModule } from 'angularx-flatpickr'
import { CalendarModule, DateAdapter } from 'angular-calendar'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'
import { ContextMenuModule } from 'ngx-contextmenu'

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
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ContextMenuModule.forRoot({
      useBootstrap4: true
    }),
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
