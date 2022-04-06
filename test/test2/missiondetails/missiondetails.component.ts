import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit, OnChanges {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.data)
  }
}
