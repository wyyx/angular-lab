import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { CdkLabHomeComponent } from './cdk-lab-home/cdk-lab-home.component'
import { CdkLabRoutingModule } from './cdk-lab-routing.module'
import { FilePreviewDialogService } from './overlay/file-preview-dialog.service'
import { FilePreviewDialogComponent } from './overlay/file-preview-dialog/file-preview-dialog.component'
import { OverlayComponent } from './overlay/overlay.component'
import { FocusRemoverDirective } from './overlay/focus-remover.directive';
import { FilePreviewDialogToolbarComponent } from './overlay/file-preview-dialog-toolbar/file-preview-dialog-toolbar.component'

@NgModule({
  imports: [CommonModule, CdkLabRoutingModule, SharedModule],
  declarations: [
    CdkLabHomeComponent,
    FilePreviewDialogComponent,
    OverlayComponent,
    FocusRemoverDirective,
    FilePreviewDialogToolbarComponent
  ],
  providers: [FilePreviewDialogService],
  entryComponents: [FilePreviewDialogComponent]
})
export class CdkLabModule {}
