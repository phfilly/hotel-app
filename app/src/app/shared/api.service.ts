import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { filterDto } from "../models/filterDto";
import { Hotels } from "../models/hotels";
import { Subject, Observable } from "rxjs";
import { tap, delay } from "rxjs/operators";

@Injectable()
export class ApiService {
  private $hotels = new Subject<Hotels[]>();
  private $isLoading = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getHotels(): Observable<Hotels[]> {
    return this.$hotels.asObservable();
  }

  getLoadingState(): Observable<boolean> {
    return this.$isLoading.asObservable();
  }

  setHotels(hotels: Hotels[]) {
    this.$hotels.next(hotels);
  }

  setLoadingState(state: boolean) {
    this.$isLoading.next(state);
  }

  getData(params?: HttpParams) {
    this.http
      .get("http://localhost:3000/api/hotels", {
        params
      })
      .pipe(
        tap(() => this.setLoadingState(true)),
        delay(250)
      )
      .subscribe((data: Hotels[]) => this.setHotels(data));
  }

  buildFilters(filters: filterDto[]) {
    this.setLoadingState(true);
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
