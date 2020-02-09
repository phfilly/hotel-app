import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "mobile-filter",
  templateUrl: "./mobile-filter.component.html",
  styleUrls: ["./mobile-filter.component.scss"]
})
export class MobileFilterComponent implements OnInit {
  selected = [];

  @Input() name: string;

  @Input() filterRange: [];

  @Output() selections = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  select(value: string) {
    const index = this.selected.indexOf(value);

    if (index === -1) {
      this.selected.push(value);
    } else if (index) {
      this.selected.splice(index, 1);
    }

    this.selections.emit(this.selected);
  }

  isSelected(value: string): boolean {
    return this.selected.includes(value) ? true : false;
  }
}
