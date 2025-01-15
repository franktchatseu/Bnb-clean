import { Component } from '@angular/core';
import { InputComponent, selectOption } from "./input/input.component";
import { CommonModule} from '@angular/common';
import { ButtonComponent } from "./button/button.component";

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {
  select_option:selectOption[] = [
    {
      name:"option 1",
      value:"value 1"
    },
    {
      name:"option 2",
      value:"value 2"
    },
    {
      name:"option 3",
      value:"value 3"
    },
    {
      name:"option 4",
      value:"value 4"
    },
  ]

  seachvalue = ""
  searchChange(value:any){
    console.log(value)
    this.seachvalue = value
  }
  selectvalue = ""
  selectchange(value:any){
    console.log(value)
    this.selectvalue = value
  }
}
