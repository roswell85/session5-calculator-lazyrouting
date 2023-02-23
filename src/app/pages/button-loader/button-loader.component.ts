import {Component, EventEmitter, Output} from '@angular/core';
import {data} from "../../interfaces/data";

@Component({
  selector: 'app-button-loader',
  templateUrl: './button-loader.component.html',
  styleUrls: ['./button-loader.component.scss']
})
export class ButtonLoaderComponent {

  //spin:EventEmitter<data> = new EventEmitter<data>()

  btntxt = 'show'
  spinner = false
  spinner2 = false
  spinner3 = true
  d = {
    spin:false
  }

  x:boolean = false
  @Output()
  spin:EventEmitter<data> = new EventEmitter<data>()


  HandleButtonClick($event: data) {


    console.log(this.x)
    if(this.x)

      this.d.spin = true
    this.spin.emit(this.d)
    setTimeout(() => {



      this.d.spin = false
      this.spin.emit(this.d)
    },2000)


  }

  count = 0
  HandleButtonClick2() {

    let t:number
    if(this.count%2 == 0) {


      t = 2000
      //this.btntxt = 'hide'
    }

    else {
      t = 0
      //this.btntxt = 'show'
    }
    console.log(this.spinner)
    this.spinner = !this.spinner


    console.log(this.spinner)
    setTimeout(()=>{
      this.spinner = !this.spinner
      this.spinner2 = !this.spinner2;
      //this.spinner3 = !this.spinner3
      if(this.btntxt == 'show')
        this.btntxt = 'hide'
      else
        this.btntxt = 'show'

    },t)
    this.count++

  }


}
