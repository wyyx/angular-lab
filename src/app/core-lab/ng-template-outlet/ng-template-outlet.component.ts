import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-ng-template-outlet',
  templateUrl: './ng-template-outlet.component.html',
  styleUrls: ['./ng-template-outlet.component.scss']
})
export class NgTemplateOutletComponent implements OnInit {
  mode = 'card'
  items = [
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    }, // ... more items,
    {
      header: 'This is header',
      content: 'This is content...'
    }
  ]
  constructor() {}

  ngOnInit() {}
}
