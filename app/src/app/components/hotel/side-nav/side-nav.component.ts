import { Component, Input } from "@angular/core";
import { Hotels } from "src/app/models/hotels";

@Component({
  selector: "hotel-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class HotelSideNavigationComponent {
  @Input() hotels: Hotels[];

  @Input() isMobile: boolean;

  constructor() {}
}
