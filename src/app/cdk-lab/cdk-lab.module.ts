import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CdkLabHomeComponent } from './cdk-lab-home/cdk-lab-home.component'
import { CdkLabRoutingModule } from './cdk-lab-routing.module'
import { SharedModule } from '../shared/shared.module'
import { FilePreviewDialogService } from './overlay/file-preview-dialog.service'
import { OverlayComponent } from './overlay/overlay.component'
import { FilePreviewDialogComponent } from './overlay/file-preview-dialog/file-preview-dialog.component'

@NgModule({
  imports: [CommonModule, CdkLabRoutingModule, SharedModule],
  declarations: [CdkLabHomeComponent, FilePreviewDialogComponent, OverlayComponent],
  providers: [FilePreviewDialogService],
  entryComponents: [FilePreviewDialogComponent]
})
export class CdkLabModule {}
