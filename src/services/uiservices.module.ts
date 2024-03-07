import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreService } from './core/core.service';
import { S3BucketService } from './S3Bucket/s3-bucket.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[CoreService, S3BucketService],
})
export class UiservicesModule { }
