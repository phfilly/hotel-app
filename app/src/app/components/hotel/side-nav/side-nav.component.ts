import { Component, Input } from "@angular/core";
import { ApiService } from "src/app/shared/api.service";
import { Hotels } from "src/app/models/hotels";

@Component({
  selector: "hotel-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
  providers: [ApiService]
})
export class HotelSideNavigationComponent {
  @Input() hotels: Hotels[];

  @Input() isMobile: boolean;

  constructor() {}
}
