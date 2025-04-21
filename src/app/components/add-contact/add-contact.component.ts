import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-contact.component.html'
})
export class AddContactComponent {
  fName = '';
  lName = '';
  phoneNumber = '';
  email = '';

  constructor(private s: ContactService, private r: Router) {}

  addContact() {
    this.s.addContact({
      fName: this.fName,
      lName: this.lName,
      phoneNumber: this.phoneNumber,
      email: this.email
    });
    this.r.navigate(['/']);
  }
}