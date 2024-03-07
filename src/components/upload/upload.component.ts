import { Component } from "@angular/core";
import * as saveAs from "file-saver";
import { S3BucketService } from "src/services/S3Bucket/s3-bucket.service";
import { CoreService } from "src/services/core/core.service";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
})
export class UploadComponent {
  uploadedFile: File | null = null;

  constructor(coreService: CoreService,
    private s3Service: S3BucketService
    ) {}

  onFileSelected(event: any): void {
    const file: File = event.addedFiles[0];
    console.log(event);
    if (file.type === "application/pdf") {
      this.uploadedFile = file;
    } else {
      alert("Only PDF files are allowed.");
    }
  }

  // onSubmit(): void {
  //   if (this.uploadedFile) {
  //     console.log("Uploaded file:", this.uploadedFile);
  //     saveAs(this.uploadedFile, this.uploadedFile.name);
  //     this.uploadedFile = null;
  //   }
  // }

  onSubmit(): void {
    if (this.uploadedFile) {
      const bucketName = 'YOUR_BUCKET_NAME';
      const folderName = 'YOUR_FOLDER_NAME';

      this.s3Service.uploadFile(this.uploadedFile, bucketName, folderName, this.uploadedFile.name)
      .then(data => {
        console.log('File uploaded successfully', data);
      })
      .catch(error => {
        console.error('Error uploading file', error);
      });
  }
  }

  onCancel(): void {
    this.uploadedFile = null;
  }
}
