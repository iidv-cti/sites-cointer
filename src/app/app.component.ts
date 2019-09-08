import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( ) {}
  /*@ViewChild('stickyMenu', {static: false}) menuElement: ElementRef;
  sticky: boolean = false;
  elementPosition: any;

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;  
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
      document.getElementById('lateral').style.top = `${window.scrollY/5}px`;
    }*/
}
