import { Component, OnInit } from "@angular/core";

@Component({
  selector: "filter-container",
  templateUrl: "./filter-container.component.html",
  styleUrls: ["./filter-container.component.scss"]
})
export class FilterContainerComponent implements OnInit {
  filters = [
    {
      name: "Max Price",
      unit: "€",
      icon: "euro_symbol"
    },
    {
      name: "Min Rating",
      unit: "",
      icon: "insert_emoticon"
    },
    {
      name: "Distance from city center",
      unit: "km",
      icon: "near_me"
    }
  ];

  sortBy = [
    {
      name: "Best supplier & price",
      value: "supplier_and_price"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
