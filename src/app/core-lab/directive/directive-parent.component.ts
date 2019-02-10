import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-directive-parent',
  template: `
    <p class="container" appFoo>
      directive-parent works!
    </p>

    <app-directive-child [bankName]="'Houdini'" [account-id]="'aaabbbccc'"></app-directive-child>
  `,
  styles: [``]
})
export class DirectiveParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
