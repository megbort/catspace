import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BREEDS } from 'src/app/data/mocks/breeds';
import { CatBreedData } from '../../data/models/cat-fact';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-breeds-table',
  templateUrl: './breeds-table.component.html',
  styleUrls: ['./breeds-table.component.scss'],
})
export class BreedsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<CatBreedData>(BREEDS);
  breedData: CatBreedData[] = BREEDS;
  
  displayedColumns: string[] = [
    'breed',
    'country',
    'origin',
    'coat',
    'pattern',
  ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
