import { Component, OnInit } from '@angular/core';

 @Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

graphs = GRAPH;
}


interface graph {
  month: string;
  sale: number;
  upload: number;
}

const GRAPH: graph[] = [
  {
   month: 'january',
    
    sale: 20,
    upload: 40
  },
  {
    month:'february',
    sale: 30,
    upload: 20
  },
  {
    month:'march',
    sale: 40,
    upload: 30
  },
  {
    month:'april',
    sale: 50,
    upload: 50
  },
  {
    month:'may',
    sale: 80,
    upload: 40
  }
];


