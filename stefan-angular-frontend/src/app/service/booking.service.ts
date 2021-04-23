import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private apollo: Apollo) { }

  getBookings(){
    let document = this.apollo
    .query<any>({
      query: gql`{
        getBooking{
          booking_date
          booking_start
          booking_end
        }
      }`
    })

    return document;
  }
}
