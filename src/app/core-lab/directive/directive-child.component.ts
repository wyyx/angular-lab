import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-directive-child',
  inputs: ['bankName', 'id: account-id'],
  template: `
    <div>Bank Name: {{ bankName }} Account Id: {{ id }}</div>
  `,
  styles: [``]
})
export class DirectiveChildComponent implements OnInit {
  bankName: string
  id: string

  constructor() {}

  ngOnInit(): void {}
}
