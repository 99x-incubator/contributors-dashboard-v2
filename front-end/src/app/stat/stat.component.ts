import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  score: number;
  contributions: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Shalitha Suranga', score: 10.0079, contributions: 100},
  {position: 2, name: 'Rajika Imal', score: 10.0026, contributions: 100},
  {position: 3, name: 'Dilantha Prasanjith', score: 10.941, contributions: 100},
  {position: 4, name: 'Buddhi Senarathne', score: 9.0122, contributions: 100},
  {position: 5, name: 'Lakindu Perera', score: 10.811, contributions: 100},

];

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})

export class StatComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'score', 'contributions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
