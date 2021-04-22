import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private apollo: Apollo) { }

  getHotels(){
    let document = this.apollo
    .query<any>({
      query: gql`{
        getHotel{
            hotel_name
            street
            city
            postal_code
            price
            email
        }
      }`
    })

    return document;
  }
}
