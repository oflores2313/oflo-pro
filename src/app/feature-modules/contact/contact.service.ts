import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from './model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactApiURL: string = 'https://8n5vwvvmk2.execute-api.us-east-1.amazonaws.com/oflo-pro-contact-us'

  constructor(private http: HttpClient) { }

  public submitContactMessage(message){
    return this.http.post(this.contactApiURL, message)
  }
}
