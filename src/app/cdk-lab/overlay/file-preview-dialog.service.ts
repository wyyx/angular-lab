import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay'
import { ComponentPortal, ComponentType, PortalInjector, TemplatePortal } from '@angular/cdk/portal'
import { Injectable, Injector, TemplateRef } from '@angular/core'
import { FilePreviewDialogRef } from './file-preview-dialog-ref'
import { FILE_PREVIEW_DIALOG_DATA } from './file-preview-dialog-tokens'
import { Router, Event, NavigationStart } from '@angular/router'
import { filter, tap } from 'rxjs/operators'
import { FilePreviewDialogComponent } from './file-preview-dialog/file-preview-dialog.component'

export interface FilePreviewDialogConfig {
  panelClass?: string
  hasBackdrop?: boolean
  backdropClass?: string
  data?: {
    file?: any
    [key: string]: any
  }
}

const DEFAULT_CONFIG: FilePreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
  data: null
}

@Injectable()
export class FilePreviewDialogService {
  constructor(private injector: Injector, private overlay: Overlay, private router: Router) {}

  open(config: FilePreviewDialogConfig = {}) {
    // Override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config }

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(dialogConfig)

    // Instantiate remote control
    const dialogRef = new FilePreviewDialogRef(overlayRef)

    // Attach the portal of FilePreviewDialogComponent to portalHost
    const dialogInstance = this.attachDialogToOverlay(overlayRef, dialogRef, dialogConfig)
    dialogRef.dialogInstance = dialogInstance

    // Close dialog when click backdrop or navigate
    overlayRef.backdropClick().subscribe(_ => dialogRef.close())
    this.router.events
      .pipe(
        filter((event: Event) => event instanceof NavigationStart),
        tap(_ => dialogRef.close())
      )
      .subscribe()

    return dialogRef
  }

  private createOverlay(config: FilePreviewDialogConfig) {
    const overlayConfig = this.getOverlayConfig(config)
    return this.overlay.create(overlayConfig)
  }

  private getOverlayConfig(config: FilePreviewDialogConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically()

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    })

    return overlayConfig
  }

  private attachDialogToOverlay(
    overlayRef: OverlayRef,
    dialogRef: FilePreviewDialogRef,
    config: FilePreviewDialogConfig
  ) {
    // Set injector with dialogRef and dialogData
    const injector = this.createInjector(config, dialogRef)
    const portal = new ComponentPortal(FilePreviewDialogComponent, null, injector)

    const componentRef = overlayRef.attach(portal)
    return componentRef.instance
  }

  private createInjector(
    config: FilePreviewDialogConfig,
    dialogRef: FilePreviewDialogRef
  ): PortalInjector {
    const injectionTokens = new WeakMap()
    console.log(config.data)

    injectionTokens.set(FilePreviewDialogRef, dialogRef)
    injectionTokens.set(FILE_PREVIEW_DIALOG_DATA, { ...config.data })

    return new PortalInjector(this.injector, injectionTokens)
  }
}
