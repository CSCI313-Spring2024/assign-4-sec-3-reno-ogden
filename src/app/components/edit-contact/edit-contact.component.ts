import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ContactService, Contact } from '../../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private contactService = inject(ContactService);

  contact!: Contact;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.contactService.getContactById(id);
    if (found) {
      this.contact = { ...found };
    }
  }

  updateContact() {
    this.contactService.updateContact(this.contact);
    this.router.navigate(['/']);
  }
}
