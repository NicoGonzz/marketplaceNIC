import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  purchaseTime: string; 
  client: string; 
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1200, purchaseTime: '2024-11-04T10:00:00', client: 'John Doe' },
    { id: 2, name: 'Smartphone', price: 800, purchaseTime: '2024-11-04T11:30:00', client: 'Jane Smith' },
    { id: 3, name: 'Headphones', price: 150, purchaseTime: '2024-11-04T12:15:00', client: 'Alice Johnson' },
    { id: 4, name: 'Camera', price: 600, purchaseTime: '2024-11-04T13:45:00', client: 'Bob Brown' },
    { id: 5, name: 'Smartwatch', price: 200, purchaseTime: '2024-11-04T14:30:00', client: 'Charlie White' }
  ];

  processPayment(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      console.log(`Processing payment for ${product.name}...`);
    }
  }
}