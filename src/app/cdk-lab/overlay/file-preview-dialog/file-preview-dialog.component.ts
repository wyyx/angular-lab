import { Component, Input, Inject, HostListener, EventEmitter } from '@angular/core'
import { FilePreviewDialogRef } from '../file-preview-dialog-ref'
import { FILE_PREVIEW_DIALOG_DATA } from '../file-preview-dialog-tokens'
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations'

// Keycode for ESCAPE
const ESCAPE = 27
const SPACE = 32

// Reusable animation timings
const ANIMATION_TIMINGS = '400ms cubic-bezier(0.25, 0.8, 0.25, 1)'

@Component({
  selector: 'app-file-preview-dialog',
  templateUrl: './file-preview-dialog.component.html',
  styleUrls: ['./file-preview-dialog.component.css'],
  animations: [
    trigger('fade', [
      state('fadeOut', style({ opacity: 0 })),
      state('fadeIn', style({ opacity: 1 })),
      transition('* => fadeIn', animate(ANIMATION_TIMINGS))
    ]),
    trigger('slideContent', [
      state('void', style({ transform: 'translate3d(0, 25%, 0) scale(0.8)', opacity: 0 })),
      state('enter', style({ transform: 'none', opacity: 1 })),
      state('leave', style({ transform: 'translate3d(0, 25%, 0)', opacity: 0 })),
      transition('* => *', animate(ANIMATION_TIMINGS))
    ])
  ]
})
export class FilePreviewDialogComponent {
  loading = true
  animationState: 'void' | 'enter' | 'leave' = 'enter'
  animationPhaseChanged = new EventEmitter<AnimationEvent>()

  constructor(
    public dialogRef: FilePreviewDialogRef,
    @Inject(FILE_PREVIEW_DIALOG_DATA)
    public data
  ) {}

  // Listen on keydown events on a document level
  @HostListener('document:keydown', ['$event']) handleKeydown(event: KeyboardEvent) {
    if (event.keyCode === ESCAPE || event.keyCode === SPACE) {
      this.dialogRef.close()
    }
  }

  onLoadFinished() {
    this.loading = false
  }

  onAnimationStart(event: AnimationEvent) {
    // console.log('onAnimationStart')

    this.animationPhaseChanged.emit(event)
  }

  onAnimationDone(event: AnimationEvent) {
    // console.log('onAnimationDone')
    this.animationPhaseChanged.emit(event)
  }

  startExitAnimation() {
    this.animationState = 'leave'
  }
}
