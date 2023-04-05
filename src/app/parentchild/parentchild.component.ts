import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';

@Component({
  selector: 'app-parentchild',
  templateUrl: './parentchild.component.html',
  styleUrls: ['./parentchild.component.css']
})
export class ParentchildComponent {
  @Input() parentData: string = "";

  @Output() childEvent = new EventEmitter<string>();

  onChange(value: string){
    this.childEvent.emit(value);
  }
  constructor() {}
  ngOnInit(){

  }

}
