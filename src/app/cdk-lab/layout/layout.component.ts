import { Component, OnInit } from '@angular/core'
import { BreakpointObserver, BreakpointState, Breakpoints, MediaMatcher } from '@angular/cdk/layout'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  matcher: MediaQueryList

  constructor(public mediaMatcher: MediaMatcher) {}

  ngOnInit() {
    console.log(Breakpoints)
    this.matcher = this.mediaMatcher.matchMedia('(min-width: 500px)')

    console.log(this.matcher)
    this.matcher.addListener(this.myListener)
  }

  ngOnDestroy() {
    this.matcher.removeListener(this.myListener)
  }

  myListener(event) {
    console.log(event.matches ? 'match' : 'no match')
  }
}
