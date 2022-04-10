import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
// import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Booking, Listing, User, AuthData, Query } from 'src/app/types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [];

  private GET_USERS = gql `{
    login(email:"sokhan@gmail.com", password: "123456"){
      userId
      token
      tokenExpiration
    }
  }`

  private POST_USERS = gql `{
    mutation login{
    login(email:"sokhan@gmail.com", password: "123456"){
      userId
      token
      tokenExpiration
    }
  }
  }`

  constructor(private apolloClient: Apollo, private router: Router) { 
    
  }

  ngOnInit(): void {
  
  }

  getUserClick(){
    this.getUser()       
  }

  getUser(){
    this.apolloClient.watchQuery<any>({
      query: this.GET_USERS,
      errorPolicy: 'all'
    }).valueChanges.subscribe(response => {
      
      this.users = response.data?.users
      console.log(response)
    }, err => {
      console.log(err)   
  }) 
}

getSubmitClick(){
  this.submitData()
}

//Mutation
submitData(){
  this.apolloClient.mutate({
     mutation: this.POST_USERS,
     variables:{

     }
  }).subscribe();
}
}

