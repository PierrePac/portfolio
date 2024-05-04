import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  
  constructor(private fb: FormBuilder,
              private messageService: MessageService) { }
  
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
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }
  
  showSucess() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'Success', detail: 'Message bien envoyé !' });
  }

  resolved(captchaResponse: string | null): void {
    if (captchaResponse) {
      console.log(`Resolved captcha with response: ${captchaResponse}`);
    } else {
      console.log("Captcha expired or failed, please retry.");
    }
  }
}
