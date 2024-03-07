import { Component } from '@angular/core';
import * as saveAs from 'file-saver';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  uploadedFile: File | null = null;

  constructor() { }

  onFileSelected(event: any): void {
    const file: File = event.addedFiles[0];
    console.log(event)
    if (file.type === 'application/pdf') {
      this.uploadedFile = file;
    } else {
      alert('Only PDF files are allowed.');
    }
  }

  onSubmit(): void {
    if (this.uploadedFile) {
      console.log('Uploaded file:', this.uploadedFile);
      saveAs(this.uploadedFile, this.uploadedFile.name);
      this.uploadedFile = null; 
    }
  }

  onCancel(): void {
    this.uploadedFile = null;
  }
}
