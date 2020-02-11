import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { filterDto } from "../models/filterDto";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(params?: HttpParams) {
    return this.http.get("http://localhost:3000/hotels", { params: params });
  }

  buildFilters(filters: filterDto) {
    let params = new HttpParams();
    params.append("filter", "");
  }
}
