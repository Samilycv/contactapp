import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { //localhost:4200 -> localhost:4200/contactManager
    path:'',redirectTo:'contactManager',pathMatch:'full'
  },
  { //listing all contacts details
    path:'contactManager',component:ContactManagerComponent
  },
  { //add new contact - localhost:4200/contactManager/addContact
    path:'contactManager/addContact',component:AddContactsComponent
  },
  { //view a particular contact
    path:'contactManager/view/:id',component:ViewContactComponent
  },
  { //edit a particular contact
    path:'contactManager/edit/:contactid',component:EditContactComponent
  },
  {//page not found
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
