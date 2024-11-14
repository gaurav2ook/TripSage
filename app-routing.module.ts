import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HotelBookingComponent } from './components/hotel-booking/hotel-booking.component';
import { ItineraryManagementComponent } from './components/itinerary-management/itinerary-management.component';
import { TrainBusReservationComponent } from './components/train-bus-reservation/train-bus-reservation.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { TrainReservationComponent } from './components/train-reservation/train-reservation.component';
import { FlightBookingComponent } from './components/flight-booking/flight-booking.component';
import { RestaurantBookingComponent } from './components/restaurant-booking/restaurant-booking.component';
import { PaymentpageComponent } from './components/paymentpage/paymentpage.component';
import { TripDetailComponent } from './components/trip-details/trip-details.component';
import { CreateNewPackageComponent } from './components/adminpackage/create-new-package/create-new-package.component';
import { CreateHotelPackageComponent } from './components/adminpackage/create-hotel-package/create-hotel-package.component';
import { CreateRestaurantPackageComponent } from './components/adminpackage/create-restaurant-package/create-restaurant-package.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { DeletepackageComponent } from './components/adminpackage/deletepackage/deletepackage.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'userprofile', component: UserprofileComponent, data: { role: 'user' } },
  { path: 'adminprofile', component: AdminprofileComponent, data: { role: 'admin' } },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'admin', component:AdminComponent},
  {path:'hotel-booking', component:HotelBookingComponent},
  {path:'itinerary-management', component:ItineraryManagementComponent},
  {path:'trip-details', component:TripDetailComponent},
  {path:'train-bus-reservation', component:TrainBusReservationComponent },
  {path:'train-reservation', component:TrainReservationComponent},
  {path:'flight-booking', component:FlightBookingComponent},
  {path:'restaurant-booking', component:RestaurantBookingComponent},
  {path:'flight-booking', component:FlightBookingComponent},
  {path:'payment-page', component:PaymentpageComponent},
  {path:'booking-page', component:BookingPageComponent},
  {path:'create-new-package', component:CreateNewPackageComponent},
  {path:'create-hotel-package', component:CreateHotelPackageComponent},
  {path:'create-restaurant-package', component:CreateRestaurantPackageComponent},
  {path:'booking-page', component:BookingPageComponent},
  {path:'account-settings', component:AccountSettingsComponent},
  {path:'reviews', component:ReviewsComponent},
  {path:'delete-package', component:DeletepackageComponent},

  { path: '**', redirectTo: '' }  // Ensure the wildcard route is last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
