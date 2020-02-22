import { Injectable } from "@angular/core";
import { ApiService } from "src/app/shared/api.service";
import { filterDto } from "src/app/models/filterDto";

@Injectable()
export class FilterService {
  filters: filterDto[] = [];

  constructor(private apiService: ApiService) {}

  filterData(filterObj: filterDto) {
    this.purgeFilters(filterObj);
    this.apiService.buildFilters(this.filters);
  }

  purgeFilters(filterObj: filterDto): void {
    const index = this.filters.findIndex(item => item.key === filterObj.key);
    if (index === -1) {
      this.filters.push(filterObj);
    } else {
      this.filters.splice(index, 1);
      this.filters.push(filterObj);
    }
  }
}
