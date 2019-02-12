import { Component, Input, Inject } from '@angular/core'
import { FilePreviewDialogRef } from '../file-preview-dialog-ref'
import { FILE_PREVIEW_DIALOG_DATA } from '../file-preview-dialog-tokens'

@Component({
  selector: 'app-file-preview-dialog',
  template: `
    <div class="overlay-content">
      <img [src]="data?.file?.url" />
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h1 {
        margin: 0;
        padding: 1em;
      }

      img {
        width: 100%;
        max-width: 500px;
        height: auto;
      }

      .overlay-content {
        padding: 1em;
      }
    `
  ]
})
export class FilePreviewDialogComponent {
  constructor(
    public dialogRef: FilePreviewDialogRef,
    @Inject(FILE_PREVIEW_DIALOG_DATA)
    public data
  ) {}
}
