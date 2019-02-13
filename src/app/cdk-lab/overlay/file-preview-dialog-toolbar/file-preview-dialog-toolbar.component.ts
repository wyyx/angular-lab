import { Component, OnInit, HostBinding } from '@angular/core'
import { trigger, state, style, transition, animate } from '@angular/animations'
import { FilePreviewDialogRef } from '../file-preview-dialog-ref'

@Component({
  selector: 'app-file-preview-dialog-toolbar',
  templateUrl: './file-preview-dialog-toolbar.component.html',
  styleUrls: ['./file-preview-dialog-toolbar.component.scss'],
  animations: [
    trigger('slideDown', [
      state('void', style({ transform: 'translateY(-100%)' })),
      state('enter', style({ transform: 'translateY(0)' })),
      state('leave', style({ transform: 'translateY(-100%)' })),
      transition('* => *', animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))
    ])
  ]
})
export class FilePreviewDialogToolbarComponent implements OnInit {
  // Apply animation to the host element
  @HostBinding('@slideDown') slideDown = 'enter'

  // Inject remote control
  constructor(private dialogRef: FilePreviewDialogRef) {}

  ngOnInit() {
    // Animate toolbar out before overlay is closed
    this.dialogRef.beforeClose().subscribe(() => (this.slideDown = 'leave'))
  }
}
