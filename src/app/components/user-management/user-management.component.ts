import { Component } from '@angular/core';

// Define the User interface with optional fields
export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;  // Add phoneNumber here (make it optional if needed)
  gender: string;
  role: string;
  password?: string;
  username: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent {
  users: User[] = []; // Array to hold user data
  currentUser: User | null = null; // Holds the user being edited or created
  searchQuery: string = ''; // Holds the search input
  selectedRole: string = 'all'; // Holds the selected role filter
  isModalOpen: boolean = false; // Track modal visibility

  constructor() {
    // Initialize with some sample data (optional)
    this.users = [
     
    ];
  }

  // Opens the modal for adding a new user or editing an existing one
  openModal(user?: User) {
    this.currentUser = user ? { ...user } : { firstName: '', lastName: '', email: '', phoneNumber:'',gender:'',role: 'user', username: '' };
    this.isModalOpen = true; // Set modal open state
  }

  // Deletes a user by ID (handles undefined ID scenario)
  deleteUser(userId: number | undefined): void {
    if (userId === undefined) {
      console.warn("Attempted to delete a user with an undefined id.");
      return; // Exit if userId is undefined
    }
    this.users = this.users.filter(user => user.id !== userId); // Filter out the user
  }

  // Saves a user (adds a new user or updates an existing one)
  saveUser(user: User) {
    if (!user.username) {
      console.error("Username is required.");
      return; // Ensure username is provided before saving
    }

    if (user.id) {
      // Update existing user
      const index = this.users.findIndex(u => u.id === user.id);
      if (index !== -1) {
        this.users[index] = { ...user }; // Update user
      }
    } else {
      // Create a new user
      const newId = this.users.length ? Math.max(...this.users.map(u => u.id || 0)) + 1 : 1;
      this.users.push({ ...user, id: newId }); // Assign a new ID and add the user to the list
    }
    this.closeModal(); // Close modal after action
  }

  // Closes the modal
  closeModal() {
    this.currentUser = null; // Reset currentUser on close
    this.isModalOpen = false; // Set modal open state to false
  }

  // Filters the user list based on search query and role
  filterUsers() {
    return this.users.filter(user => {
      const matchesQuery = user.firstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                           user.lastName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                           user.email.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesRole = this.selectedRole === 'all' || user.role === this.selectedRole;
      return matchesQuery && matchesRole;
    });
  }

  // Handles the form submission for adding or editing users
  submitUser() {
    if (this.currentUser) {
      this.saveUser(this.currentUser); // Save user (add or update)
    }
  }

  // Navigate to the correct profile view based on the user's role
  navigateToProfile(user: User): void {
    if (user.role === 'admin') {
      // Route to admin profile page
      console.log('Navigating to admin profile');
      // Use router.navigate(['/profile/admin']); (Assuming routing is set up)
    } else {
      // Route to user profile page
      console.log('Navigating to user profile');
      // Use router.navigate(['/profile/user']); (Assuming routing is set up)
    }
  }
}
