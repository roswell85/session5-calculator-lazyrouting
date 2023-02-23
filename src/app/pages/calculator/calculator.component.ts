import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {


  metaData = [['1', '2', '3', '4'], ['5', '6', '7', '8'], ['9', '0', '+', '-'], ['/', '*', '.', '=']];
  constructor() {
    this.showCalc = true
    this.spin = false
    this.btnText = "show"
    this.res = "0"
  }

  inputValue = ''
  spin:boolean
  showCalc:boolean
  btnText:string;
  res:string;

  f(){
    if(!this.showCalc)
      this.btnText = "hide"

    else
      this.btnText  = "show"

    this.showCalc = !this.showCalc
  }



  showUnShowCalculator(){

    if(!this.showCalc)
      this.btnText = "hide"

    else
      this.btnText  = "show"


    this.spin = true

    setTimeout(()=>{


      this.spin = false
      //this.f()
      this.showCalc = !this.showCalc

    },2000)


  }

  HandleButtonClick(cell: string, btn: HTMLButtonElement) {
    if (cell == '=') {
      this.inputValue = eval(this.inputValue);
      this.res = this.inputValue

    }
    else if(cell=='result')
      this.inputValue += this.res
    else if(cell=='reset')
      this.inputValue = "0"
    else {
      this.inputValue += cell;

    }
    btn.style.backgroundColor='red';

    setTimeout(()=>{

      btn.style.backgroundColor='';

    },500);
  }

}
