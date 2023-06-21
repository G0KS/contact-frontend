import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { contactSchema } from 'src/models/contactSchema';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  allGroups: any = [];
  contact: contactSchema = {};

  constructor(
    private editRoute: ActivatedRoute,
    private api: ApiService,
    private navigate: Router
  ) {}

  ngOnInit(): void {
    this.editRoute.params.subscribe({
      next: (parameter: any) => {
        const { id } = parameter;
        this.api.viewcontact(id).subscribe({
          next: (res: any) => {
            this.contact = res;
            console.log(this.contact);
          },
        });
        this.api.getAllGroup().subscribe({
          next: (res: any) => {
            this.allGroups = res;
          },
        });
      },
    });
  }

  updateContact(id: any, contact: any) {
    this.api.editContact(id, contact).subscribe({
      next: (res: any) => {
        alert(`Succesfully updated`);
        this.navigate.navigateByUrl('');
      },
    });
  }
}
