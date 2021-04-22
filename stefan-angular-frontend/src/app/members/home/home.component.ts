import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import {Hotels} from '../../types/hotels'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hotels:any;
  loading = true;

  constructor(private router: Router,private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .query<any>({
        query: gql`
        {
          getHotel{
              hotel_name
              street
              city
              postal_code
              price
              email
          }
        }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          this.hotels = data.getHotel;
          this.loading = loading;
          console.log(this.hotels);
        }
      );
  }

  logOut(){
    localStorage.removeItem('isValidUser');
    this.router.navigate(['login']);
  }

}
