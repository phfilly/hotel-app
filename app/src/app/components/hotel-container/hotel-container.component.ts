import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Hotels } from 'src/app/models/hotels';

@Component({
  selector: 'app-hotel-container',
  templateUrl: './hotel-container.component.html',
  styleUrls: ['./hotel-container.component.scss'],
  providers: [
    ApiService
  ]
})
export class HotelContainerComponent implements OnInit {
  public hotels: Hotels[];
  isLoading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log('here');
    this.getData();
  }

  getData() {
    this.apiService.getData().subscribe((data: Hotels[]) => {
      this.hotels = [ ...data ];
      this.isLoading = false;
    });
  }

}
