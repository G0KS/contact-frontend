import { Component, OnInit } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  allGroups: any = [];
  contact: contactSchema = {};

  constructor(private api: ApiService, private navigate: Router) {}

  ngOnInit(): void {
    this.api.getAllGroup().subscribe({
      next: (res: any) => {
        this.allGroups = res;
      },
      error: (err: any) => {
        console.log(err.message);
      },
    });
  }

  addContact() {
    this.api.addContact(this.contact).subscribe({
      next: () => {
        alert(`new contact added`);
        this.navigate.navigateByUrl('');
      },
    });
  }
}
