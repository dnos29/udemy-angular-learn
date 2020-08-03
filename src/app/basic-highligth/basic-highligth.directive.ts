import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHightLigth]',
})

export class BasicHighLigthDirective implements OnInit{
  constructor(private elementRef: ElementRef){

  }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}