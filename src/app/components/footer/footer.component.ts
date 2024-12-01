import { Component, inject, OnInit } from '@angular/core';
import { ContactDetail } from '../../interfaces/contact-detail';
import { ApisService } from '../../services/apis.service';
import { SortService } from '../../services/sort.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  apisService = inject(ApisService);
  sortService = inject(SortService);

  contactDetails: ContactDetail[] = [];

  ngOnInit(): void {
    this.getContactDetails();
  }

  getContactDetails() {
    const contactDetailApi = this.apisService.getJson<ContactDetail[]>('json/contact-details');
    contactDetailApi.subscribe({
      next: response => {
        // console.log('personal-project', response);
        this.contactDetails = this.sortService.ascendingSort(response, 'order');
      },
      error: error => {
        console.error('error', error);
      }
    });
  }
}
