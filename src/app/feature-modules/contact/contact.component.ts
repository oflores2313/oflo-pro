import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;


  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
      messageType: new FormControl('')

    })
  }


  contactMe(contactFormData) {
    console.log('hey oscar: ', contactFormData)
  }
}
