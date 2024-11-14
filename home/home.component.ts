import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Define the services array dynamically
  services = [
    {
      name: 'Hotel',
      description: 'Enjoy a luxurious stay with our range of premium hotel rooms equipped with all modern amenities.',
      iconClass: 'fa-hotel',
      borderColor: '#f1c40f', // Yellow border for hotel service
      delay: '0.1s'
    },
    {
      name: 'Restaurant',
      description: 'Indulge in a variety of cuisines at our in-house restaurant, crafted to satisfy every palate.',
      iconClass: 'fa-utensils',
      borderColor: '#e74c3c', // Red border for restaurant service
      delay: '0.2s'
    },
    {
      name: 'Trip Planning',
      description: 'Let us handle your trip planning for a seamless and enjoyable travel experience.',
      iconClass: 'fa-route',
      borderColor: '#2ecc71', // Green border for trip service
      delay: '0.3s'
    }
  ];

}
