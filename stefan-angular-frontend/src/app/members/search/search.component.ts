import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelService } from '../../service/hotel.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  hotels:any;
  hotelsCity:any;
  loading = true;
  error: any;

  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
  }

  onSubmitName(loginForm: NgForm):void{
   let hotelName = loginForm.value.searchByName

   this.hotelService.getHotelByName(hotelName)
    .subscribe(
      ({ data, loading }) => {
        if (data.getHotelByName) this.hotels = data.getHotelByName;
        else alert("error");
        this.loading = loading;
      }
    );
  }

  onSubmitCity(loginForm: NgForm):void{
    let hotelCity = loginForm.value.searchByCity

    this.hotelService.getHotelByCity(hotelCity)
     .subscribe(
       ({ data }) => {
         if (data.getHotelByCity) this.hotelsCity = data.getHotelByCity;
         else alert("error");
       }
     );
   }

}
