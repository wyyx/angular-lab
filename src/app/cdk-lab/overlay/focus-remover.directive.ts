import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core'

@Directive({
  selector: '[appFocusRemover]'
})
export class FocusRemoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.el.nativeElement.blur()
  }
}
