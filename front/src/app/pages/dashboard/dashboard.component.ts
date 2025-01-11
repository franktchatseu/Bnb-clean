import { Component } from '@angular/core';
import { AsideComponent } from "../../components/aside/aside.component";
import { HeaderComponent } from "../../components/header/header.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsideComponent, HeaderComponent, HeaderComponent , RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
