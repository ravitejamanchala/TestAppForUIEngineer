import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DealData, DealDataService } from 'src/app/services/deal-data.service';
@Component({
  selector: 'app-task3',
  standalone: true,
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class Task3Component implements AfterViewInit {
  displayedColumns: string[] = ['created', 'dueDate', 'status', 'customer', 'meters', 'quotes'];
  dataSource = new MatTableDataSource<DealData>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dealDataService: DealDataService) {}

  ngAfterViewInit(): void {
    this.dealDataService.getDeals().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}