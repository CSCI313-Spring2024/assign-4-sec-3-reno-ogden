import { Component, Input } from '@angular/core';
import { Contact } from '../../services/contact.service';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [],
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {
  @Input() contact!: Contact;

  constructor(
    private router: Router,
    private contactService: ContactService
  ) {}

  editContact() {
    this.router.navigate(['/edit', this.contact.id]);
  }

  deleteContact() {
    this.contactService.deleteContact(this.contact.id);
  }
}
