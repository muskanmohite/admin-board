import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
like=35;
upload=10;
stars=500;
user=5;
  constructor() { }

  ngOnInit(): void {
  }

}
