import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MatSliderChange } from "@angular/material/slider";
import { SlideFilter } from "../../filter-container/shared/filterModels";

@Component({
  selector: "slide-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class SlideFilterComponent implements OnInit {
  value: number;

  @Input() filter: SlideFilter;

  @Output() selected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updateValue(sliderChange: MatSliderChange) {
    this.value = sliderChange.value;
    this.selected.emit({ key: this.filter.key, value: sliderChange.value });
  }

  showValue() {
    if (this.filter.unit && this.filter.unit.isPrefix) {
      return `${this.filter.unit.name}${this.value}`;
    } else if (this.filter.unit && this.filter.unit.isSuffix) {
      return `${this.value}${this.filter.unit.name}`;
    } else {
      return this.value;
    }
  }
}
