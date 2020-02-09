import { Component, OnInit, Input } from "@angular/core";

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
      value: "SUPPLIER_AND_PRICE"
    }
  ];

  mobileFilters = [
    {
      name: "Guest Rating",
      key: "GUEST_RATING",
      values: ["Any", "6+", "7+", "8+", "9+"]
    },
    {
      name: "Star Rating",
      key: "STAR_RATING",
      values: ["Any", "2&#9733;", "3&#9733;", "4&#9733;", "5&#9733;"]
    }
  ];

  @Input() isMobile: boolean;

  constructor() {}

  ngOnInit(): void {}
}
