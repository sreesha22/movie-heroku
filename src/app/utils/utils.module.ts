import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from './default-image.pipe';
import { EllipsifyPipe } from './ellipsify.pipe';
import { SplitStringPipe } from './split-string.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DefaultImagePipe, EllipsifyPipe, SplitStringPipe],
  exports: [DefaultImagePipe, EllipsifyPipe, SplitStringPipe]
})
export class UtilsModule { }