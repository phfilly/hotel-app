import { Injectable } from "@angular/core";

@Injectable()
export class FilterService {
  constructor() {}

  filterData(filterObj: object) {
    console.log(filterObj);
  }
}
