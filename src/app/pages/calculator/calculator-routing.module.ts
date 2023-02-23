import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from "./calculator.component";

const routes: Routes = [
  {path:'basic',component:CalculatorComponent},
  {path:'**',redirectTo:'basic'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
