import { Component } from '@angular/core';
import { PackagesService } from '../../services/packages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private packageService:PackagesService) { }
  ngOnInit(): void {
    this.packageService.getManualPackages().subscribe((response) => {
      console.log(response);
    });
  }

}
