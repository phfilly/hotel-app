import { Component, OnInit, Input } from "@angular/core";
import { Hotels } from "src/app/models/hotels";

@Component({
  selector: "hotel-listing",
  templateUrl: "./hotel-listing.component.html",
  styleUrls: ["./hotel-listing.component.scss"]
})
export class HotelListingComponent implements OnInit {
  public rating = { text: "", class: "" };

  @Input() hotel: Hotels;

  @Input() isMobile: boolean;

  constructor() {}

  ngOnInit(): void {
    this.printRatingText();
  }

  printRatingText() {
    if (this.hotel.rating < 5) {
      this.rating = { text: "Oof not good", class: "red" };
    } else if (this.hotel.rating > 5 && this.hotel.rating < 8) {
      this.rating = { text: "Very Good", class: "average" };
    } else if (this.hotel.rating > 8) {
      this.rating = { text: "Amazing", class: "great" };
    }
  }
}
