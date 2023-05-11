import { Component, ElementRef, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.scss']
})
export class TextFilterComponent {

  @Input() text: fabric.Object;
  @Output() emit: ElementRef<any>;

  ngOnInit(){
    
  }

}
