import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { filterDto } from "../models/filterDto";
import { Hotels } from "../models/hotels";
import { Subject } from "rxjs";

@Injectable()
export class ApiService {
  $hotels = new Subject<Hotels[]>();

  constructor(private http: HttpClient) {}

  getData(params?: HttpParams) {
    this.http
      .get("http://localhost:3000/api/hotels", {
        params
      })
      .subscribe((data: Hotels[]) => this.$hotels.next(data));
  }

  buildFilters(filters: filterDto[]) {
    let params = new HttpParams();
    for (let i = 0; i < filters.length; i++) {
      if (filters[i].value) {
        params = params.append(filters[i].key, filters[i].value.toString());
      } else {
        params = params.append(filters[i].key, filters[i].data.toString());
      }
    }
    this.getData(params);
  }
}
