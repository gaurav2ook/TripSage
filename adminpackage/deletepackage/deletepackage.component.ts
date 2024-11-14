import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PackageService } from '../../../services/package.service';

@Component({
  selector: 'app-deletepackage',
  templateUrl: './deletepackage.component.html',
  styleUrls: ['./deletepackage.component.css']
})
export class DeletepackageComponent implements OnInit {

  showHotelSection: boolean = true;
  packages= [
    {
      name:"package name",
      id:"1",
      description:"manali trip",
      price:"5000",
      duration:"4 days",
      destination:"manali",
    }
  ]; // Array to hold the list of packages
  errorMessage: string = ''; // Variable to hold error messages

  constructor(private router: Router, private packageService: PackageService) {}

  ngOnInit(): void {
    this.loadPackages(); // Load packages on component initialization
  }

  /**
   * Method to load packages from the service
   */
  loadPackages(): void {
    this.packageService.getPackages().subscribe({
      next: (data: any[]) => {
        this.packages = data; // Assign the fetched packages to the packages array
      },
    });
  }

  /**
   * Method to delete a package by ID
   * @param packageId The ID of the package to be deleted
   */
  deletePackage(packageId: string): void {
    if (confirm('Are you sure you want to delete this package?')) {
      this.packageService.deletePackage(packageId).subscribe({
        next: () => {
          this.packages = this.packages.filter(pkg => pkg.id !== packageId); // Remove the deleted package from the array
          alert('Package deleted successfully.');
        },
        error: (error) => {
          this.errorMessage = 'An error occurred while deleting the package.'; // Display a user-friendly error message
          console.error('Error deleting package:', error); // Log the error for debugging
        }
      });
    }
  }
}
