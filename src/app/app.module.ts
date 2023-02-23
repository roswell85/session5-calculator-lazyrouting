import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import {HomeModule} from "./pages/home/home.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
//import {ButtonloaderModule} from "./pages/button-loader/buttonloader.module";
//import {SpinnerComponent} from "./components/spinner/spinner.component";
import { ButtonLoaderComponent } from './pages/button-loader/button-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,

  ],
    imports: [
        BrowserModule,BrowserAnimationsModule,MenubarModule,
        AppRoutingModule,
        HomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
