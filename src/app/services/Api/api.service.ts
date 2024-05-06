import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactForm } from '../../models/ContactForm/contact-form';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendContactForm(data: ContactForm): Observable<any> {
    return this.http.post<any>(`${this.API_URL}contact`, data);
  }
}
