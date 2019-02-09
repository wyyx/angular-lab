import { Directive } from '@angular/core'

@Directive({
  selector: '[appFoo]',
  host: {
    class: 'houdini',
    id: 'abc',
    onclick: '(function() { let a = 3; let b = 5;  console.log("xxx", a+b)})()'
  }
})
export class fooDirective {}
