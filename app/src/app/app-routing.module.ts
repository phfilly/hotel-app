import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelContainerComponent } from './components/hotel-container/hotel-container.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [{
  path: '', component: HotelContainerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
