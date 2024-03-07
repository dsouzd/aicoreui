import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class S3BucketService {

  private s3: AWS.S3;

  constructor() {
    AWS.config.update({
      accessKeyId: 'YOUR_ACCESS_KEY_ID',
      secretAccessKey: 'YOUR_SECRET_ACCESS_KEY'
    });

    this.s3 = new AWS.S3({
      apiVersion: '2006-03-01',
      region: 'YOUR_BUCKET_REGION'
    });
  }

  uploadFile(file: File, bucketName: string, folderName: string, fileName: string): Promise<any> {
    const params = {
      Bucket: bucketName,
      Key: `${folderName}/${fileName}`,
      Body: file
    };

    return this.s3.upload(params).promise();
  }
}
