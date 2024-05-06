import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ContactForm } from '../../models/ContactForm/contact-form';
import { ApiService } from '../../services/Api/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  messageSuccess = { severity: 'success', summary: 'Success', detail: 'Message bien envoyé !' };
  messageEchec = { severity: 'error', summary: 'Echec', detail: 'Echec de l\'envoi !' };
  
  constructor(private fb: FormBuilder,
              private messageService: MessageService,
              private apiService: ApiService
            ) { }
  
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      phone: [''],
      company: [''],
      honeypot: ['']
    });
  }
  
  onSubmit() {
    if (this.contactForm.valid && this.contactForm.get('honeypot')?.value === '') {
      const formdata: ContactForm = this.contactForm.value;
      console.log(formdata);
      this.apiService.sendContactForm(formdata).subscribe({
        next: (response) => {
          this.contactForm.reset();
          this.showSucess(this.messageSuccess.severity, this.messageSuccess.summary, this.messageSuccess.detail);
        },
        error: (error) => {
          this.showSucess(this.messageEchec.severity, this.messageEchec.summary, this.messageEchec.detail);
        }
      })
    }
  }
  
  showSucess(severity: string, summary:string, detail: string) {
    this.messageService.add({ key: 'tc', severity: severity, summary: summary, detail: detail });
  }
}
