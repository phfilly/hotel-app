import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Filter } from "../shared/filters";

@Component({
  selector: "block-filter",
  templateUrl: "./block-filter.component.html",
  styleUrls: ["./block-filter.component.scss"]
})
export class BlockFilterComponent {
  selections = [];

  @Input() data: Filter;

  @Output() selected = new EventEmitter();

  constructor() {}

  select(value: string) {
    const index = this.selections.indexOf(value);
    if (index === -1) {
      this.selections.push(value);
    } else if (index) {
      this.selections.splice(index, 1);
    } else {
      this.selections.splice(0, 1);
    }

    this.selected.emit({ key: this.data.key, data: this.selections });
  }

  isSelected(value: string): boolean {
    return this.selections.includes(value) ? true : false;
  }

  printValue = (index: number, block: string) =>
    index > 0 ? `${block}${this.data.symbol}` : block;
}
