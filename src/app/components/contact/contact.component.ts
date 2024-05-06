import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EmailService } from '../../services/Email/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  messageSuccess = { severity: 'success', summary: 'Success', detail: 'Message bien envoyé !' };
  messageEchec = { severity: 'danger', summary: 'Echec', detail: 'Echec de l\'envoi !' };
  
  constructor(private fb: FormBuilder,
              private messageService: MessageService,
              private emailService: EmailService
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
      this.emailService.sendEmail(this.contactForm.value).subscribe({
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
