import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { sortBy, filters, block_filters } from "./shared/filterData";
import { FilterService } from "./shared/filter.service";
import { filterDto } from "src/app/models/filterDto";
import { FilterKey } from "./shared/filterEnum";
import { ApiService } from "src/app/shared/api.service";

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
  colours = ["#F1BE01", "#0077FF"];

  @Input() isMobile: boolean;

  @Output() closeMenu = new EventEmitter();

  constructor(
    private filterService: FilterService,
    public apiService: ApiService
  ) {}

  ngOnInit(): void {}

  selection(event: filterDto) {
    if (event["source"]) {
      this.filterService.filterData({
        key: FilterKey.SORT_BY,
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
