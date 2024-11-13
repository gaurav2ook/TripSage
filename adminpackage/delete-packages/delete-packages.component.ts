// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-delete-packages',
//   templateUrl: './delete-packages.component.html',
//   styleUrl: './delete-packages.component.css'
// })
// export class DeletePackagesComponent implements OnInit {
//   packages: any[] = [];  // Array to store packages data

//   constructor(
//     private packageService: PackageService,  // Inject the service that handles package-related operations
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.fetchPackages();  // Call method to fetch the list of packages on component initialization
//   }

//   // Fetch the list of packages from the backend (Assumed API call)
//   fetchPackages() {
//     this.packageService.getPackages().subscribe((data: any[]) => {
//       this.packages = data;
//     });
//   }

//   // Method to delete a package
//   deletePackage(packageId: number) {
//     if (confirm('Are you sure you want to delete this package?')) {
//       this.packageService.deletePackage(packageId).subscribe(() => {
//         this.fetchPackages();  // Refresh the package list after deletion
//         alert('Package deleted successfully');
//       });
//     }
//   }
// }