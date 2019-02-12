import { Component, OnInit } from '@angular/core'
import { STATIC_FILE_DATE } from './data'
import { FilePreviewDialogService } from './file-preview-dialog.service'
import { FilePreviewDialogRef } from './file-preview-dialog-ref'
import { FilePreviewDialogComponent } from './file-preview-dialog/file-preview-dialog.component'

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  files: { name: string; url: string }[] = STATIC_FILE_DATE

  constructor(private previewDialog: FilePreviewDialogService) {}

  ngOnInit(): void {}

  showPreview(file: { name: string; url: string }) {
    const dialogRef: FilePreviewDialogRef = this.previewDialog.open(FilePreviewDialogComponent, {
      backdropClass: 'file-preview-backdrop',
      data: { file }
    })
  }
}
