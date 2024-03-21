import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ResultsComponent } from './results/results.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    UploadComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    NgxDropzoneModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), 
    }),
  ],
  exports: [UploadComponent, ResultsComponent]
})
export class UicomponentsModule { }
