import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css'
})
export class ReviewCardComponent implements OnInit {

  reviews = [
    {
      title: 'Trip to Paris',
      rating: 4,
      reviewText: 'Amazing experience! The Eiffel Tower at night was breathtaking.',
      date: '2024-10-15'
    }
    // More reviews can be added here
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Method to edit review
  editReview(index: number): void {
    const editedReview = prompt('Edit your review:', this.reviews[index].reviewText);
    if (editedReview !== null) {
      this.reviews[index].reviewText = editedReview;
    }
  }

  // Method to delete review
  deleteReview(index: number): void {
    if (confirm('Are you sure you want to delete this review?')) {
      this.reviews.splice(index, 1);
    }
  }
}