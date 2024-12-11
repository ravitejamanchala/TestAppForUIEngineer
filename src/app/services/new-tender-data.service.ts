import { Injectable } from '@angular/core';

export interface NewTenderSection {
  title: string;
  description: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class NewTenderDataService {
  private sections: NewTenderSection[] = [
    {
      title: 'Customer information',
      description: 'Enter the basic information about the client.',
      status: 'Completed',
    },
    {
      title: 'Meter lookup & usage data',
      description: 'Lookup for meter information and upload usage data.',
      status: 'Pending',
    },
    {
      title: 'Suppliers and products',
      description: 'Select suppliers, products, and terms.',
      status: 'Pending',
    },
    {
      title: 'Documents',
      description: 'Attach documents to the tender, like contract and terms of service.',
      status: 'Pending',
    },
    {
      title: 'Review and submit',
      description: 'Review all the information, add a custom message, and submit the tender.',
      status: 'Pending',
    },
  ];

  getSections() {
    return this.sections;
  }
}