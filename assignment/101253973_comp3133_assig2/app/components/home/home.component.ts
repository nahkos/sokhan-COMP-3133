import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {gql} from 'apollo-angular'
import { Booking, Listing, User, AuthData, Query } from 'src/app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listings!: Observable<Listing[]>;

  private GET_LISTINGS = gql `{
    listings {
      _id
      listing_id
      description
      street
      postal_code
      price
      date
      username    
    }
  }`

  constructor(private apolloClient: Apollo) { 
    // this.getListing()
  }

  ngOnInit(): void {
    
  }

  getListingClick(){
    this.getListing()
  }

  getListing(){
    this.listings = this.apolloClient.watchQuery<any>({
      query: this.GET_LISTINGS
    }).valueChanges
    .pipe(
      map(result => result.data.listings)
    );
  }
  

}
