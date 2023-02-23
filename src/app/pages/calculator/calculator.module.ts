import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import {ButtonLoaderComponent} from "../button-loader/button-loader.component";
import {ButtonLoaderModule} from "../button-loader/button-loader.module";
//import {ButtonloaderModule} from "../button-loader/buttonloader.module";
//import {SpinnerComponent} from "../../components/spinner/spinner.component";


@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    ButtonLoaderModule
  ]
})
export class CalculatorModule { }
