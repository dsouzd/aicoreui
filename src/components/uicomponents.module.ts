import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { NgxDropzoneModule } from 'ngx-dropzone';



@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    NgxDropzoneModule
  ],
  exports: [UploadComponent]
})
export class UicomponentsModule { }
