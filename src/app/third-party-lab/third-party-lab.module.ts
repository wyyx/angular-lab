import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { FlatpickrModule } from 'angularx-flatpickr'
import { CalendarModule, DateAdapter } from 'angular-calendar'
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'
import { ThirdPartyLabRoutingModule } from './third-party-lab-routing.module'
import { ThirdPartyLabHomeComponent } from './third-party-lab-home/third-party-lab-home.component'
import { AngularCalendarComponent } from './angular-calendar/angular-calendar.component'
import { BootstrapComponent } from './bootstrap/bootstrap.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThirdPartyLabRoutingModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [ThirdPartyLabHomeComponent, AngularCalendarComponent, BootstrapComponent]
})
export class ThirdPartyLabModule {}
