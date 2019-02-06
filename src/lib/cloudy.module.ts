import { NgModule } from '@angular/core';
import { CloudyComponent } from './cloudy.component';
import 'jquery-tagcanvas/tagcanvas';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [CloudyComponent],
  imports: [
CommonModule
  ],
  exports: [CloudyComponent]
})
export class CloudyModule { }
