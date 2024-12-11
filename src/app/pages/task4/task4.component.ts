import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { NewTenderDataService, NewTenderSection } from 'src/app/services/new-tender-data.service';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule, 
  ],
})
export class Task4Component {
  sections: NewTenderSection[] = [];

  constructor(private newTenderDataService: NewTenderDataService) {}

  ngOnInit(): void {
    this.sections = this.newTenderDataService.getSections();
  }
  getStatusIcon(status: string): string {
    switch (status) {
      case 'Completed':
        return 'check'; 
      case 'In Progress':
        return 'error_outline';
      case 'Pending':
        return 'error_outline'; 
      default:
        return 'error_outline';
    }
  }
}