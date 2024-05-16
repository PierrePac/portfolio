import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ContactForm } from '../../models/ContactForm/contact-form';
import { ApiService } from '../../services/Api/api.service';
import { emailValidator } from '../../validators/email.validator';
import { phoneValidator } from '../../validators/phone.validator';

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
      email: ['', [Validators.required, emailValidator()]],
      message: ['', Validators.required],
      phone: ['', phoneValidator()],
      company: [''],
      honeypot: ['']
    });
  }
  
  onSubmit() {
    if (this.contactForm.valid && this.contactForm.get('honeypot')?.value === '') {
      const formdata: ContactForm = this.contactForm.value;
      this.apiService.sendContactForm(formdata).subscribe({
        next: (response) => {
          console.log('Réponse réussie:', response);
          this.showMessage('success', 'Success', 'Message bien envoyé !');
          this.contactForm.reset();
        },
        error: (error) => {
          console.error('Erreur lors de la requête:', error);
          this.showMessage('error', 'Echec', 'Echec de l\'envoi !');
        }
      })
    }
  }
  
  showMessage(severity: string, summary:string, detail: string) {
    this.messageService.add({ key: 'tc', severity: severity, summary: summary, detail: detail });
  }
}
