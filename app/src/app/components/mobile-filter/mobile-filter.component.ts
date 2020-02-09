import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "mobile-filter",
  templateUrl: "./mobile-filter.component.html",
  styleUrls: ["./mobile-filter.component.scss"]
})
export class MobileFilterComponent implements OnInit {
  @Input() name: string;

  @Input() filterRange: [];

  @Output() selection = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  select(value: string) {
    this.selection.emit(value);
  }
}
