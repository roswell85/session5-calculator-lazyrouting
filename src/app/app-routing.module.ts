import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ErrorComponent} from "./pages/error/error.component";
import {AboutComponent} from "./pages/about/about.component";

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'about',component:AboutComponent},
  {path:'calculator',loadChildren:() => import('./pages/calculator/calculator.module').then(m => m.CalculatorModule)},
  {path:'**',component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
