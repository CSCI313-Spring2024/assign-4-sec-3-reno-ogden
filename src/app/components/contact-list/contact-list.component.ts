import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [NgFor, ContactCardComponent, RouterModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contactService = inject(ContactService);
  contacts = this.contactService.contacts;
}
