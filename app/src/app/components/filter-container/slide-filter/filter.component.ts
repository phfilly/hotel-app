import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { SlideFilter } from "../shared/filters";
import { MatSliderChange } from "@angular/material/slider";

@Component({
  selector: "slide-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class SlideFilterComponent implements OnInit {
  @Input() filter: SlideFilter;

  @Output() selected = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updateValue(sliderChange: MatSliderChange) {
    this.selected.emit({ key: this.filter.key, value: sliderChange.value });
  }
}
