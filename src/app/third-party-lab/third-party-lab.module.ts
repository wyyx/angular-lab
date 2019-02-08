import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'
import { CalendarModule } from 'angular-calendar'
import { FlatpickrModule } from 'angularx-flatpickr'
import { ContextMenuModule } from 'ngx-contextmenu'
import { AngularCalendarComponent } from './angular-calendar/angular-calendar.component'
import { BootstrapComponent } from './bootstrap/bootstrap.component'
import { ThirdPartyLabHomeComponent } from './third-party-lab-home/third-party-lab-home.component'
import { ThirdPartyLabRoutingModule } from './third-party-lab-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThirdPartyLabRoutingModule,
    NgbModalModule,
    FlatpickrModule,
    CalendarModule,
    ContextMenuModule
  ],
  declarations: [ThirdPartyLabHomeComponent, AngularCalendarComponent, BootstrapComponent]
})
export class ThirdPartyLabModule {}
