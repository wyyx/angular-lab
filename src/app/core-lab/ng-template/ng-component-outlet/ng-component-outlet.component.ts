import { Component, OnInit } from '@angular/core'
import { HelloWorldComponent } from '../hello-world/hello-world.component'

@Component({
  selector: 'app-ng-component-outlet',
  templateUrl: './ng-component-outlet.component.html',
  styleUrls: ['./ng-component-outlet.component.scss']
})
export class NgComponentOutletComponent implements OnInit {
  helloWorld = HelloWorldComponent

  constructor() {}

  ngOnInit() {}
}
