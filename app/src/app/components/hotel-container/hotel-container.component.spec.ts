import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelContainerComponent } from './hotel-container.component';

describe('HotelContainerComponent', () => {
  let component: HotelContainerComponent;
  let fixture: ComponentFixture<HotelContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
