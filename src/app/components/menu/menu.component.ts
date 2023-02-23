import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {


  items : MenuItem[]= [
    {label:'home',icon:'pi pi-home',routerLink:'home'},
    {label:'tools',items:[{label:'calculator',icon:'pi pi-calculator',routerLink:'calculator'},
        {label:'other tools',icon:'pi pi-cog'}]},
    {label:'about'}
  ];

}
