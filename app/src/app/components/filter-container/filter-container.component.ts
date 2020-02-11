import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { sortBy, filters, block_filters } from "./shared/filters";
import { FilterService } from "./shared/filter.service";

@Component({
  selector: "filter-container",
  templateUrl: "./filter-container.component.html",
  styleUrls: ["./filter-container.component.scss"],
  providers: [FilterService]
})
export class FilterContainerComponent implements OnInit {
  SORT_BY = sortBy;
  SLIDE_FILTERS = filters;
  BLOCK_FILTERS = block_filters;

  @Input() isMobile: boolean;

  @Output() closeMenu = new EventEmitter();

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {}

  selection(event: Object) {
    if (event["source"]) {
      this.filterService.filterData({
        key: event["value"],
        value: event["value"]
      });
    } else {
      this.filterService.filterData(event);
    }
  }

  back() {
    this.closeMenu.emit();
  }
}
