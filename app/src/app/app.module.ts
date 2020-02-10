import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TopNavigationComponent } from "./components/top-navigation/top-navigation.component";
import { FilterContainerComponent } from "./components/filter-container/filter-container.component";
import { HotelContainerComponent } from "./components/hotel/hotel-container/hotel-container.component";
import { HotelListingComponent } from "./components/hotel/hotel-listing/hotel-listing.component";
import { MatSliderModule } from "@angular/material/slider";
import { MatIconModule } from "@angular/material/icon";
import { SlideFilterComponent } from "./components/filter-container/slide-filter/filter.component";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BlockFilterComponent } from "./components/filter-container/block-filter/block-filter.component";
import { HotelSideNavigationComponent } from "./components/hotel/side-nav/side-nav.component";

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    FilterContainerComponent,
    HotelContainerComponent,
    HotelListingComponent,
    HotelSideNavigationComponent,
    SlideFilterComponent,
    BlockFilterComponent
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
