import { Component } from "@angular/core";
import { ApiService } from "src/app/shared/api.service";
import { Hotels } from "src/app/models/hotels";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: "app-hotel-container",
  templateUrl: "./hotel-container.component.html",
  styleUrls: ["./hotel-container.component.scss"],
  providers: [ApiService]
})
export class HotelContainerComponent {
  public hotels: Hotels[];
  isLoading = true;
  isMobile = false;
  showFiller = false;

  constructor(
    private apiService: ApiService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.configureDevice();
    this.apiService.getData();
    this.getData();
  }

  getData() {
    this.apiService.$hotels.subscribe((hotels: Hotels[]) => {
      this.hotels = [...hotels];
      this.isLoading = false;
    });
  }

  configureDevice() {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
}
