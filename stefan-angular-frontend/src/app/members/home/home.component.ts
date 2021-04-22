import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HotelService } from '../../service/hotel.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hotels:any;
  loading = true;
  error: any;

  constructor(private router: Router,private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelService.getHotels()
      .subscribe(
        ({ data, loading }) => {
          this.hotels = data.getHotel;
          this.loading = loading;
          console.log(this.hotels);
        },
        error => {
          this.loading = false;
          this.error = error;
        }
      );
  }

  logOut(){
    localStorage.removeItem('isValidUser');
    this.router.navigate(['login']);
  }

}
