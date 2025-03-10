import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isDropdownOpen = false;
  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token'); // Check if JWT token exists
  }

  logout() {
    localStorage.removeItem('token'); // Remove token
    this.router.navigate(['/login']); // Redirect to login
  }
}
