import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { TemplateFormComponent } from './template-form/template-form.component'
import { SonComponent } from './son/son.component'
import { FatherComponent } from './father/father.component'
import { SharedModule } from './shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { FormLabModule } from './form-lab/form-lab.module'

@NgModule({
	declarations: [ AppComponent, TemplateFormComponent, SonComponent, FatherComponent ],
	imports: [
		BrowserModule,
		SharedModule,
		FormLabModule,
		BrowserAnimationsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
