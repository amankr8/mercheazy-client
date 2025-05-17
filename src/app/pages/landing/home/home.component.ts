import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = [
    {
      id: 1,
      name: 'Creator Hoodie',
      price: 999,
      creator: 'Jane Doe',
      imageUrl: 'assets/products/hoodie.jpg',
    },
    {
      id: 2,
      name: 'Logo T-Shirt',
      price: 599,
      creator: 'John Smith',
      imageUrl: 'assets/products/tshirt.jpg',
    },
  ];
}
