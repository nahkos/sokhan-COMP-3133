import { Component, OnInit } from '@angular/core';
// import { response } from 'express';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missionDetails = ['FalconSat', 'DemoSat', 'Trailblazer', 'RatSat', 'RazakSat', 'Falcon 9 Test Flight', 'COTS 1', 'COTS 2', 'CRS-1', 'CRS-2', 'CASSIOPE', 'SES-8', 'Thaicom 6', 'CRS-3', 'OG-2'];
  
  launchYears = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  
  launchDataArray = [];
  isLoading = false;
  launchDetailSelectedIndex!: number;
  launchYearSelectedIndex?: number;
  showFilter = false;

  
  constructor(private appService: SpacexapiService) { }

  ngOnInit(): void {
    this.getAllLaunches()
  }

  getAllLaunches(): any {
    this.isLoading = true
    this.appService.getAllLaunches()
    .subscribe((response: any) => {
      console.log(response)
      this.launchDataArray = response
      this.isLoading = false
    }, err => {
      console.log(err)
      this.isLoading = false
    })
  }

  filterDetailPrograms(index: number, detail: string): any {
    console.log(index, detail)
    this.getFilteredLaunches(detail)
    this.launchDetailSelectedIndex = index
  }

  // getFilteredLaunches(detail: string): any {
  //   this.appService.getLaunchesByName(detail)
  //   .subscribe((response: any) => {
  //     console.log(response)
  //     this.launchDataArray = response
  //   }, err => {
  //     console.log(err)
  //   })
  // }

  filterLaunchPrograms(index: number, year: string): any {
    // console.log(index, year);
    this.getFilteredLaunches(year);
    this.launchYearSelectedIndex = index;
    this.showFilter = true;
  }

  getFilteredLaunches(year: string): any {
    this.appService.getLaunchesByYear(year)
    .subscribe((response: any) => {
      // console.log(response);
      this.launchDataArray = response;
    }, err => {
      console.log(err);
    })
  }
}
