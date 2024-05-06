import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
private apiUrl = environment.email;

  constructor(private http: HttpClient) { }

  sendEmail(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
