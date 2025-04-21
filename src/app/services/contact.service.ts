import { Injectable, signal } from '@angular/core';

export interface Contact {
  id: number;
  fName: string;
  lName: string;
  phoneNumber: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private id = 3;

  private contactsSignal = signal<Contact[]>([
    {
      id: 1,
      fName: 'John',
      lName: 'Adams',
      phoneNumber: '701-000-1000',
      email: 'john@email.com'
    },
    {
      id: 2,
      fName: 'Mary',
      lName: 'Jane',
      phoneNumber: '701-000-2000',
      email: 'mary@email.com'
    }
  ]);

  contacts = this.contactsSignal.asReadonly();

  addContact(c: Omit<Contact, 'id'>) {
    let all = this.contactsSignal();
    all.push({ id: this.id++, ...c });
    this.contactsSignal.set(all);
  }

  deleteContact(id: number) {
    this.contactsSignal.set(
      this.contactsSignal().filter(c => c.id !== id)
    );
  }

  updateContact(c: Contact) {
    let list = this.contactsSignal().map(old => old.id === c.id ? c : old);
    this.contactsSignal.set(list);
  }

  getContactById(id: number) {
    return this.contactsSignal().find(c => c.id === id);
  }
}