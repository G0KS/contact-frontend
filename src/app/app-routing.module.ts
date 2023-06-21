import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AllContactsComponent,
  },
  {
    path: 'add-contact',
    component: AddContactComponent,
  },
  {
    path: 'view-contact/:id',
    component: ViewContactComponent,
  },
  {
    path: 'edit-contact/:id',
    component: EditContactComponent,
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
