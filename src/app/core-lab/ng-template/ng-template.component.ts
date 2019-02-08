import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  TemplateRef,
  AfterViewInit
} from '@angular/core'

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit, AfterViewInit {
  @ViewChild('template') template: TemplateRef<any>
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef

  constructor() {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.container.createEmbeddedView(this.template, {
        nameFromContext: 'Tom',
        ageFromContext: 35
      })
    }, 0)
  }
}
