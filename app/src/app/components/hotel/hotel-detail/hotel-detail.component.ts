import { Component, OnInit, Input } from "@angular/core";
import { Hotels } from "src/app/models/hotels";

@Component({
  selector: "hotel-detail",
  templateUrl: "./hotel-detail.component.html",
  styleUrls: ["./hotel-detail.component.scss"]
})
export class HotelDetailComponent implements OnInit {
  public rating = { text: "", class: "" };

  @Input() hotel: Hotels;

  constructor() {}

  ngOnInit(): void {
    this.printRatingText();
  }

  printRatingText(): void {
    if (this.hotel.rating < 5) {
      this.rating = { text: "Oof not good", class: "red" };
    } else if (this.hotel.rating > 5 && this.hotel.rating < 8) {
      this.rating = { text: "Very Good", class: "average" };
    } else if (this.hotel.rating > 8) {
      this.rating = { text: "Amazing", class: "great" };
    }
  }
}
