import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TopNavigationComponent } from "./components/top-navigation/top-navigation.component";
import { FilterContainerComponent } from "./components/filter-container/filter-container.component";
import { HotelContainerComponent } from "./components/hotel-container/hotel-container.component";
import { HotelListingComponent } from "./components/hotel-listing/hotel-listing.component";
import { MatSliderModule } from "@angular/material/slider";
import { MatIconModule } from "@angular/material/icon";
import { FilterComponent } from "./components/filter/filter.component";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SideNavigationComponent } from "./components/side-navigation/side-navigation.component";
import { MobileFilterComponent } from './components/mobile-filter/mobile-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    FilterContainerComponent,
    HotelContainerComponent,
    HotelListingComponent,
    FilterComponent,
    SideNavigationComponent,
    MobileFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
