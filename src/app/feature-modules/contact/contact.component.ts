import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;


  constructor(
    private contactService: ContactService,
    private toastrService: ToastrService
    ) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl(''),
      messageType: new FormControl('')

    })
  }


  contactMe(contactFormData) {
    console.log('test: ', contactFormData)
    this.contactService.submitContactMessage(contactFormData).subscribe(
      success => this.toastrService.success('Thank you', 'Message submitted successfully'),
      err => this.toastrService.error('Error', 'Message not submitted')
    )
    
  }
}
