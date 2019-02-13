import { OverlayRef } from '@angular/cdk/overlay'
import { Subject, Observable } from 'rxjs'
import { FilePreviewDialogComponent } from './file-preview-dialog/file-preview-dialog.component'
import { filter, take } from 'rxjs/operators'

export class FilePreviewDialogRef {
  constructor(private overlayRef: OverlayRef) {}

  close(): void {
    this.overlayRef.dispose()
  }
}
