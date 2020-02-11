import { Component, OnInit, Input } from "@angular/core";
import { Hotels } from "src/app/models/hotels";

@Component({
  selector: "hotel-pricing",
  templateUrl: "./hotel-pricing.component.html",
  styleUrls: ["./hotel-pricing.component.scss"]
})
export class HotelPricingComponent implements OnInit {
  @Input() hotel: Hotels;

  constructor() {}

  ngOnInit(): void {}
}
