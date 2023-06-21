import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css'],
})
export class AllContactsComponent implements OnInit {
  isLoading: boolean = true;
  errorMsg: string = '';
  allContacts: any = [];
  searchTerm: string = '';

  dateDetails: Date = new Date();

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getallcontact();
  }

  getallcontact() {
    this.api.getAllContacts().subscribe({
      next: (res: any) => {
        setTimeout(() => {
          this.allContacts = res;
          this.isLoading = false;
        }, 500);
      },
      error: (err: any) => {
        console.log(err.message);
        this.errorMsg = err.message;
      },
    });
  }

  deleteContact(id: any) {
    this.api.removeContact(id).subscribe({
      next: () => {
        alert(`Contact removed`);
        this.isLoading = true;
        this.getallcontact();
      },
    });
  }
}
