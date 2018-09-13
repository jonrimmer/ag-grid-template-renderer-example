import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule} from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { TemplateRendererComponent } from './template-renderer/template-renderer.component';
import { OrdinalPipe } from './ordinal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemplateRendererComponent,
    OrdinalPipe
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([
      TemplateRendererComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
