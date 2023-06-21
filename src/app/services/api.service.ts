import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'https://contact-server-api-75yy.onrender.com';

  constructor(private http: HttpClient) {}

  // Get all contacts
  getAllContacts() {
    // Make api call to http://localhost:3000/contacts
    return this.http.get(`${this.baseUrl}/contacts`);
  }

  // view contact
  viewcontact(id: any) {
    return this.http.get(`${this.baseUrl}/contacts/${id}`);
  }

  // get single group detail
  getAgroup(id: any) {
    return this.http.get(`${this.baseUrl}/groups/${id}`);
  }

  // get all groups
  getAllGroup() {
    return this.http.get(`${this.baseUrl}/groups`);
  }

  // add contact
  addContact(contact: contactSchema) {
    return this.http.post(`${this.baseUrl}/contacts`, contact);
  }

  // edit contact
  editContact(id: any, body: contactSchema) {
    return this.http.put(`${this.baseUrl}/contacts/${id}`, body);
  }

  // remove contact
  removeContact(id: any) {
    return this.http.delete(`${this.baseUrl}/contacts/${id}`);
  }
}
