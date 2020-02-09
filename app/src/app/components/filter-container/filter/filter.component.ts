import { Component, OnInit, Input } from "@angular/core";
import { Webfilter } from "../shared/filters";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  @Input() filter: Webfilter;

  constructor() {}

  ngOnInit(): void {}
}
