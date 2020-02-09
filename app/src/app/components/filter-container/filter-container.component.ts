import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { sortBy, webFilters, mobileFilters } from "./shared/filters";

@Component({
  selector: "filter-container",
  templateUrl: "./filter-container.component.html",
  styleUrls: ["./filter-container.component.scss"]
})
export class FilterContainerComponent implements OnInit {
  SORT_BY = sortBy;
  WEB_FILTERS = webFilters;
  MOBILE_FILTERS = mobileFilters;

  @Input() isMobile: boolean;

  @Output() closeMenu = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  back() {
    this.closeMenu.emit();
  }
}
