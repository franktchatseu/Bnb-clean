import { NgClass } from '@angular/common';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text = ""
  @Input() textColor = "gray-500"
  @Input() rounded = "lg"
  @Input() bgColor = "white"
  @Input() size = "96"
  @Input() isloading = false
}
