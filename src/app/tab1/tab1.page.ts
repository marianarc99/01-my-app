import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}


ngOnInit(){

  let numero = 2
  debugger
  numero = 10
  numero=numero+1
  numero=0
  console.log(numero)
}
}
