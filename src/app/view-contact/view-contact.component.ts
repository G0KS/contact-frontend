import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  groupName: string = '';
  contact: any = {};

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    //get path parameter from route
    this.route.params.subscribe({
      next: (res: any) => {
        // object destructuring
        const { id } = res;

        this.api.viewcontact(id).subscribe({
          next: (contactdetails: any) => {
            // console.log(contactdetails);
            this.contact = contactdetails;

            const { groupId } = contactdetails;
            // make service call to get details of that group
            this.api.getAgroup(groupId).subscribe({
              next: (groupdetails: any) => {
                this.groupName = groupdetails.name;
              },
            });
          },
        });
      },
    });
  }
}
