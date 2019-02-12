import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core'
import { HelloWorldComponent } from '../hello-world/hello-world.component'

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit, AfterViewInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef

  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    const f = this.cfr.resolveComponentFactory(HelloWorldComponent)
    this.vc.createComponent(f)
  }
}
