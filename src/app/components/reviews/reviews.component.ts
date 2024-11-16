import { Component } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';

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
    description: 'I had the most amazing time at the beach. The views were breathtaking, and the experience was unforgettable.',
    date: '2024-09-15'
  },
  {
    title: 'Good, but could be improved',
    rating: 4,
    description: 'The trip was fun, but I think the hotel could use some improvements.',
    date: '2024-08-20'
  },
  {
    title: 'Not Great',
    rating: 2,
    description: 'The trip didn’t meet my expectations. Not worth the money.',
    date: '2024-07-30'
  }
];

// Object to hold new review data
newReview = {
  title: '',
  rating: 1,
  description: '',
  date: ''
};

constructor(private reviewsService: ReviewsService) { }

ngOnInit(): void {
  // Any initialization logic if needed
  this.reviewsService.getReviews().subscribe(data => {
    this.reviews = data;
  });
}

// Method to handle review submission
submitReview(): void {
  // Check if the required fields are filled
  if (this.newReview.title && this.newReview.rating && this.newReview.description && this.newReview.date) {
    // Add the new review to the reviews array
    this.reviews.push({ ...this.newReview });
    
    // Reset the newReview form fields after submission
    const review = {
      title: this.newReview.title,
      rating: this.newReview.rating,
      description: this.newReview.description,
      date: this.newReview.date
    };

    this.reviewsService.addReview(review).subscribe();

    alert('Review added successfully!');

    this.newReview = {
      title: '',
      rating: 1,
      description: '',
      date: ''
    };
  } else {
    alert('Please fill out all fields.');
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