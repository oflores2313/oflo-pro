import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;


  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
      messageType: new FormControl('')

    })
  }


  contactMe(contactFormData) {
    this.contactService.submitContactMessage(contactFormData).subscribe()
    
  }
}
