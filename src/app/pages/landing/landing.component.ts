import { Component } from '@angular/core';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [NavbarComponent, RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
