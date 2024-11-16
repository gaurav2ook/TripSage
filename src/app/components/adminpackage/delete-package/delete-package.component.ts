import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../../services/packages.service';
import { UserprofileService } from '../../../services/userprofile.service';
// import { PackageService } from '../../../services/package.service';

@Component({
  selector: 'app-delete-package',
  templateUrl: './delete-package.component.html',
  styleUrls: ['./delete-package.component.css']
})
export class DeletePackageComponent implements OnInit {
  showHotelSection: boolean = true;
  errorMessage: string | null = null;

  adminName: string = '';
  adminEmail: string = '';
  
  // Package results with 'type' added
  packageResults = [
    { 
      id: '1', 
      name: 'Beach Getaway', 
      location: 'Miami', 
      price: 500, 
      duration: 7, 
      description: '7-day trip to Miami with hotel stay, meals, and activities.', 
      image: 'assets/img/package1.jpg', 
      type: 'Trip', 
      createdDate: '2023-12-10' 
    },
    { 
      id: '2', 
      name: 'Mountain Adventure', 
      location: 'Colorado', 
      price: 800, 
      duration: 5, 
      description: '5-day adventure in Colorado with guided tours and accommodations.', 
      image: 'assets/img/package2.jpg', 
      type: 'Trip', 
      createdDate: '2023-12-12' 
    },
    { 
      id: '3', 
      name: 'Hotel Sunshine', 
      location: 'New York', 
      price: 120, 
      duration: 1, 
      description: 'Stay at the luxurious Hotel Sunshine in New York for one night.', 
      image: 'assets/img/hotel1.jpg', 
      type: 'Hotel', 
      createdDate: '2023-12-15' 
    },
    { 
      id: '4', 
      name: 'Pasta Paradise', 
      location: 'Los Angeles', 
      price: 40, 
      duration: 1, 
      description: 'Italian meal at Pasta Paradise in Los Angeles.', 
      image: 'assets/img/restaurant1.jpg', 
      type: 'Restaurant', 
      createdDate: '2023-12-20' 
    }
  ];

  constructor(private packagesService: PackagesService, private userprofileService: UserprofileService) {}

  ngOnInit(): void {
    this.packagesService.getPackages().subscribe(
      (data: any) => {
        console.log(data);
        this.packageResults = data;
      }
    );
    this.userprofileService.getUserProfile().subscribe(data => {
      this.adminEmail = data.email;
      this.adminName = data.firstName + ' ' + data.lastName;
    });
  }

  deletePackage(packageId: string) {
    this.packagesService.deletePackage(packageId).subscribe(
      () => {
        this.packageResults = this.packageResults.filter(pkg => pkg.id !== packageId);
      },
      (error: any) => {
        this.errorMessage = "Error deleting the package";
      }
    );
  }
}