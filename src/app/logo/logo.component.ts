import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
  <div class="logo ui segment" >
    <sui-dimmer class="inverted" 
    [(isDimmed)]="segmentDimmed" 
    [isClickable]="isClickable">
    [(transitionDuration)]="300"
    </sui-dimmer>
    <a>
    <img src="assets/logo.png"  class="ui big image"
    (mouseover)="segmentDimmed = !segmentDimmed"
    (mouseleave)="segmentDimmed = !segmentDimmed"
    >
    </a>
  </div>`,
  styles: [`
  .logo{
    flex: 1;
    padding: 4%;
    background: no-repeat url('../../assets/fundo.png');
    background-position: center center;
    background-size: cover;
    justify-content: center !important;
    align-items: center !important;
  }
  .logo img{
      z-index: 1000;
      align-self: center !important;
      margin: 0 auto !important;
      cursor: pointer;
      transition-duration: .6s;
  }
  .logo img:hover{
      transform: scale(1.05);
      transition-duration: .5s;
  }
`],
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
