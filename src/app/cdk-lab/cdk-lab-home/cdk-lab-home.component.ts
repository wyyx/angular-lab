import { Component, OnInit } from '@angular/core'
import { FilePreviewOverlayService } from '../file-preview-overlay.service'
import { FilePreviewOverlayRef } from '../file-preview-overlay-ref'
import { STATIC_FILE_DATE } from '../data'

@Component({
  selector: 'app-cdk-lab-home',
  templateUrl: './cdk-lab-home.component.html',
  styleUrls: ['./cdk-lab-home.component.scss']
})
export class CdkLabHomeComponent implements OnInit {
  files = STATIC_FILE_DATE

  constructor(private previewDialog: FilePreviewOverlayService) {}

  ngOnInit(): void {}

  showPreview(file) {
    let dialogRef: FilePreviewOverlayRef = this.previewDialog.open({
      image: file
    })
  }
}
