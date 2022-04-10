import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Booking, Listing, User, AuthData, Query } from 'src/app/types';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings!: Observable<Booking[]>;

  private GET_BOOKINGS = gql `{
    bookings {
      _id
      listing {
        listing_title
        street
      }
      user {
        lastname
      }
      createdAt
      updatedAt
    }
  }`

  private POST_BOOKINGS = gql `{
    mutation bookings{
      bookings {
        _id
        listing {
          listing_title
          street
        }
        user {
          lastname
        }
        createdAt
        updatedAt
      }
    }
  }`

  constructor(private apolloClient: Apollo) { }

  ngOnInit(): void {
    this.getBooking
  }

  getBookingClick(){
    this.getBooking()
  }

  // getBooking(){
  //   this.bookings = this.apolloClient.watchQuery<any>({
  //     query: this.GET_BOOKINGS
      
  //   }).valueChanges
  //   .pipe(
  //     map(result => result.data.bookings)
  //   );
  // }

  getBooking(){
    this.apolloClient.watchQuery<any>({
      query: this.GET_BOOKINGS,
      errorPolicy: 'all'
    }).valueChanges.subscribe(response => {
      console.log(response)
      console.log(response.data)
      this.bookings = response.data?.rates
      console.log(this.bookings)
    })
  }

getSubmitClick(){
  this.submitData()
}

//Mutation
submitData(){
  this.apolloClient.mutate({
     mutation: this.POST_BOOKINGS,
     variables:{

     }
  }).subscribe();
}

}
