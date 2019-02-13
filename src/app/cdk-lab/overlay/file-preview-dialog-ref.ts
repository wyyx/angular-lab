import { OverlayRef } from '@angular/cdk/overlay'
import { Subject, Observable } from 'rxjs'
import { FilePreviewDialogComponent } from './file-preview-dialog/file-preview-dialog.component'
import { filter, take } from 'rxjs/operators'

export class FilePreviewDialogRef {
  private _beforeClose = new Subject<void>()
  private _afterClosed = new Subject<void>()

  dialogInstance: FilePreviewDialogComponent

  constructor(private overlayRef: OverlayRef) {}

  close(): void {
    this.dialogInstance.animationPhaseChanged
      .pipe(
        filter(event => event.phaseName === 'start'),
        take(1)
      )
      .subscribe(() => {
        this._beforeClose.next()
        this._beforeClose.complete()

        // Only start dispose backdrop when exit animation starts
        this.overlayRef.detachBackdrop()
      })

    this.dialogInstance.animationPhaseChanged
      .pipe(
        filter(event => event.phaseName === 'done' && event.toState === 'leave'),
        take(1)
      )
      .subscribe(() => {
        // Start full dispose when exit animation ends
        this.overlayRef.dispose()
        this._afterClosed.next()
        this._afterClosed.complete()

        this.dialogInstance = null!
      })

    //  Start exit animation of image
    this.dialogInstance.startExitAnimation()
  }

  afterClosed(): Observable<void> {
    return this._afterClosed.asObservable()
  }

  beforeClose(): Observable<void> {
    return this._beforeClose.asObservable()
  }
}
