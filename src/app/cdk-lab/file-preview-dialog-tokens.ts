import { InjectionToken } from '@angular/core'

export const FILE_PREVIEW_DIALOG_DATA = new InjectionToken<{
  file?: any
  [key: string]: any
}>('FILE_PREVIEW_DIALOG_DATA')
