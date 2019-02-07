import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CdkLabHomeComponent } from './cdk-lab-home/cdk-lab-home.component'
import { CdkLabRoutingModule } from './cdk-lab-routing.module'
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component'
import { SharedModule } from '../shared/shared.module'
import { FilePreviewOverlayService } from './file-preview-overlay.service'

@NgModule({
  imports: [CommonModule, CdkLabRoutingModule, SharedModule],
  declarations: [CdkLabHomeComponent, FilePreviewOverlayComponent],
  providers: [FilePreviewOverlayService],
  entryComponents: [FilePreviewOverlayComponent]
})
export class CdkLabModule {}
