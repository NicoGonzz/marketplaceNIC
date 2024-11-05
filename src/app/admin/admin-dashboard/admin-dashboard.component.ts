import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

interface User {
  id: number;
  username: string;
  email: string;
  role: 'operator' | 'client';
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  products: Product[] = [];
  users: User[] = [];
  
  newProduct: Product = { id: 0, name: '', description: '', price: 0, stock: 0 };
  newUser: User = { id: 0, username: '', email: '', role: 'client' };

  constructor() {
    this.products = [
      { id: 1, name: 'Laptop', description: 'High-performance laptop', price: 1200, stock: 5 },
      { id: 2, name: 'Smartphone', description: 'Latest smartphone model', price: 800, stock: 10 }
    ];

    this.users = [
      { id: 1, username: 'admin', email: 'admin@example.com', role: 'operator' },
      { id: 2, username: 'user1', email: 'user1@example.com', role: 'client' }
    ];
  }

  addProduct() {
    if (this.newProduct.name && this.newProduct.price > 0) {
      this.newProduct.id = this.products.length + 1;
      this.products.push({ ...this.newProduct });
      this.newProduct = { id: 0, name: '', description: '', price: 0, stock: 0 }; 
    }
  }

  updateProduct(productId: number) {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products[index] = { ...this.newProduct }; 
      this.newProduct = { id: 0, name: '', description: '', price: 0, stock: 0 }; 
    }
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId); 
  }

  addUser() {
    if (this.newUser.username && this.newUser.email) {
      this.newUser.id = this.users.length + 1; 
      this.users.push({ ...this.newUser });
      this.resetForm();
    }
  }

  updateUser(userId: number) {
    const index = this.users.findIndex(u => u.id === userId);
    if (index !== -1) {
      this.users[index] = { ...this.newUser }; 
      this.resetForm();
    }
  }

  deleteUser(userId: number) {
    this.users = this.users.filter(u => u.id !== userId); 
  }

  resetForm() {
    this.newUser = { id: 0, username: '', email: '', role: 'client' };
  }

}
