import { Injectable } from "@angular/core";
import { ApiService } from "src/app/shared/api.service";
import { filterDto } from "src/app/models/filterDto";

@Injectable()
export class FilterService {
  constructor(private apiService: ApiService) {}

  filterData(filterObj: filterDto) {
    console.log(filterObj);
    this.apiService.buildFilters(filterObj);
  }
}
