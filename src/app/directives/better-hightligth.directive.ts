import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHightligth]'
})
export class BetterHightligthDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highligthColor: string = 'dodgerblue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elmRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elmRef.nativeElement,
    //   'background-color',
    //   'dodgerblue'
    //   );
  }
  @HostListener('mouseenter') mouseoverListener(eventData: Event){
    console.log(eventData);
    
    // this.renderer.setStyle(
    //   this.elmRef.nativeElement,
    //   'background-color',
    //   'dodgerblue'
    //   );
    this.backgroundColor = this.highligthColor;
  }
  @HostListener('mouseleave') mouseleaveListener(eventData: Event){
    // this.renderer.setStyle(
    //   this.elmRef.nativeElement,
    //   'background-color',
    //   'transparent'
    //   );
    this.backgroundColor = this.defaultColor;
  }
}
