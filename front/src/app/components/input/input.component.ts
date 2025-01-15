import { NgClass } from '@angular/common';
import { Component, EventEmitter, input, Input, Output } from '@angular/core';


export interface selectOption {
  name:string,value:string
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() type:string  = "text"
  @Input() size:string = "full"
  @Input() placeholder: string = "Default placeholder"
  @Input() options: selectOption[] = [] 
  @Input() rounded: string = "lg"
  @Output() searchChange = new EventEmitter()
  @Output() selectChange = new EventEmitter()

  onchange(event:any){
    this.searchChange.emit(event.target.value)
  }

  onselect(event:any){
    this.selectChange.emit(event.target.value)
  }

}
