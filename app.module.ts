import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ItineraryManagementComponent } from './components/itinerary-management/itinerary-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

import { HotelBookingComponent } from './components/hotel-booking/hotel-booking.component';
import { MapsLocationComponent } from './components/maps-location/maps-location.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { AdminprofileComponent } from './components/adminprofile/adminprofile.component';
import { FlightBookingComponent } from './components/flight-booking/flight-booking.component';
import { TrainReservationComponent } from './components/train-reservation/train-reservation.component';
import { RestaurantBookingComponent } from './components/restaurant-booking/restaurant-booking.component';
import { PaymentpageComponent } from './components/paymentpage/paymentpage.component';
import { TrainBusReservationComponent } from './components/train-bus-reservation/train-bus-reservation.component';
import { TripDetailComponent } from './components/trip-details/trip-details.component';
import { CreateNewPackageComponent } from './components/adminpackage/create-new-package/create-new-package.component';
import { CreateHotelPackageComponent } from './components/adminpackage/create-hotel-package/create-hotel-package.component';
import { CreateRestaurantPackageComponent } from './components/adminpackage/create-restaurant-package/create-restaurant-package.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { DeletepackageComponent } from './components/adminpackage/deletepackage/deletepackage.component';

  @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TrainBusReservationComponent,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    ItineraryManagementComponent,
    UserManagementComponent,
    HotelBookingComponent,
    MapsLocationComponent,
    NavbarComponent,
    FooterComponent,
    AdminComponent,
    UserprofileComponent,
    AdminprofileComponent,
    FlightBookingComponent,
    TrainReservationComponent,
    RestaurantBookingComponent,
    PaymentpageComponent,
    
    TripDetailComponent,
    CreateNewPackageComponent,
    CreateHotelPackageComponent,
    CreateRestaurantPackageComponent,
    BookingPageComponent,
    AccountSettingsComponent,
    ReviewsComponent,
    DeletepackageComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
  ],
  providers: [
    
    provideHttpClient(withFetch()) // Enable fetch for HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
