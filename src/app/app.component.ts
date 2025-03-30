import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageCropperComponent, ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

export type CropperDialogResult = {
  blob: Blob;
  imageUrl: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ImageCropperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  imagePath = "http://localhost:4200/assets/images/avatar.png";
  title = 'image-cropper';
  mageCropDialog = false;
  result: CropperDialogResult | undefined;

  imageCropped(event: ImageCroppedEvent) {
    const { blob, objectUrl } = event;
    
    if (blob && objectUrl) {
      this.result = { blob, imageUrl: objectUrl };
      console.log('Cropped image:', this.result.imageUrl);
    }
  }

  onCrop() {
    this.imagePath = this.result?.imageUrl || this.imagePath;
  }

}
