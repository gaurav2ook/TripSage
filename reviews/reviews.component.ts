import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
// Reviews array to hold the reviews data
reviews = [
  {
    title: 'Amazing Trip to the Beach!',
    rating: 5,
    reviewText: 'I had the most amazing time at the beach. The views were breathtaking, and the experience was unforgettable.',
    date: '2024-09-15'
  },
  {
    title: 'Good, but could be improved',
    rating: 4,
    reviewText: 'The trip was fun, but I think the hotel could use some improvements.',
    date: '2024-08-20'
  },
  {
    title: 'Not Great',
    rating: 2,
    reviewText: 'The trip didn’t meet my expectations. Not worth the money.',
    date: '2024-07-30'
  }
];

// Object to hold new review data
newReview = {
  title: '',
  rating: 1,
  reviewText: '',
  date: ''
};

constructor() { }

ngOnInit(): void {
  // Any initialization logic if needed
}

// Method to handle review submission
submitReview(): void {
  // Check if the required fields are filled
  if (this.newReview.title && this.newReview.rating && this.newReview.reviewText && this.newReview.date) {
    // Add the new review to the reviews array
    this.reviews.push({ ...this.newReview });
    
    // Reset the newReview form fields after submission
    this.newReview = {
      title: '',
      rating: 1,
      reviewText: '',
      date: ''
    };

    console.log('Review added successfully!');
  } else {
    console.log('Please fill out all fields.');
  }
}

// Method to edit an existing review (can be extended to open an edit form)
editReview(index: number): void {
  const reviewToEdit = this.reviews[index];
  console.log('Editing review:', reviewToEdit);
  // You can implement logic to edit the review, e.g., open a modal or populate a form
}

// Method to delete an existing review
deleteReview(index: number): void {
  const confirmDelete = confirm('Are you sure you want to delete this review?');
  if (confirmDelete) {
    this.reviews.splice(index, 1);  // Remove the review from the reviews array
    console.log('Review deleted successfully.');
  }
}
}
