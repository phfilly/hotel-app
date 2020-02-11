import { Component, Input, Output, EventEmitter } from "@angular/core";
import { BlockSelectFilter } from "../shared/filters";

@Component({
  selector: "block-filter",
  templateUrl: "./block-filter.component.html",
  styleUrls: ["./block-filter.component.scss"]
})
export class BlockFilterComponent {
  selections = [];

  @Input() data: BlockSelectFilter;

  @Output() selected = new EventEmitter();

  constructor() {}

  select(index: number, value: string) {
    if (this.data.blockSelect.isMultiSelect) {
      this.multiSelect(value);
    } else {
      this.lessThanSelect(index, value);
    }

    this.selected.emit({ key: this.data.key, data: this.selections });
  }

  multiSelect(value: string) {
    const index = this.selections.indexOf(value);
    if (index === -1) {
      this.selections.push(value);
    } else if (index) {
      this.selections.splice(index, 1);
    } else {
      this.selections.splice(0, 1);
    }
  }

  lessThanSelect(index: number, value: string) {
    this.selections = this.data.blockSelect.values.filter((value, i) => {
      if (i >= index) {
        return value;
      }
    });
  }

  isSelected(value: string): boolean {
    return this.selections.includes(value) ? true : false;
  }

  printValue = (index: number, block: string) =>
    index > 0 ? `${block}${this.data.blockSelect.symbol}` : block;
}
