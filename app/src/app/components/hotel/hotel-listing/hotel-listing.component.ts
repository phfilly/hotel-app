import { Component, OnInit, Input } from "@angular/core";
import { Hotels } from "src/app/models/hotels";

@Component({
  selector: "hotel-listing",
  templateUrl: "./hotel-listing.component.html",
  styleUrls: ["./hotel-listing.component.scss"]
})
export class HotelListingComponent implements OnInit {
  isFavourite = false;

  @Input() hotel: Hotels;

  @Input() isMobile: boolean;

  constructor() {}

  ngOnInit(): void {}

  toggleFavourite() {
    this.isFavourite = !this.isFavourite;
  }
}
