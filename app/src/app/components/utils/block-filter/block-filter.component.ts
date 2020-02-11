import { Component, Input, Output, EventEmitter } from "@angular/core";
import { BlockSelectFilter } from "../../filter-container/shared/filterModels";

@Component({
  selector: "block-filter",
  templateUrl: "./block-filter.component.html",
  styleUrls: ["./block-filter.component.scss"]
})
export class BlockFilterComponent {
  selections = [];

  @Input() data: BlockSelectFilter;

  @Input() colour: string;

  @Output() selected = new EventEmitter();

  constructor() {}

  select(index: number, value: string) {
    if (this.data.blockSelect.isMultiSelect) {
      this.multiSelect(value);
      this.selected.emit({ key: this.data.key, data: this.selections });
    } else {
      this.moreThanSelect(index, value);
      this.selected.emit({ key: this.data.key, value: value });
    }
  }

  multiSelect(value: string): void {
    const index = this.selections.indexOf(value);
    if (index === -1) {
      this.selections.push(value);
    } else {
      this.selections.splice(index, 1);
    }
  }

  moreThanSelect(index: number, value: string): void {
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
