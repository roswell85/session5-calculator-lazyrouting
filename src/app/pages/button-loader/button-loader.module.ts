import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonLoaderComponent} from "./button-loader.component";
import {ComponentsModule} from "../../components/components.module";



@NgModule({
  declarations: [ButtonLoaderComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],exports:[ButtonLoaderComponent]
})
export class ButtonLoaderModule { }
