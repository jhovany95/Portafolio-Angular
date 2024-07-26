import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { LanguageService } from '../../services/language.service';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-conctact',
  standalone: true,
  imports: [NgxCaptchaModule,ReactiveFormsModule,CommonModule],
  templateUrl: './conctact.component.html',
  styleUrl: './conctact.component.scss'
})
export class ConctactComponent {
  contactForm: FormGroup;
  siteKey: string;
  contactMeTrad:any;

  constructor(private fb: FormBuilder, private languageService: LanguageService,private darkModeService: DarkModeService) {
    this.siteKey = '6LcHoRcqAAAAAFtKF3pAAgQ5B8IrdP0B9aH_vF9e';
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.languageService.language$.subscribe(() => {
      this.updateTranslations(); // Actualiza cuando el idioma cambia
    });

    this.updateTranslations(); // Carga las traducciones iniciales
  }

  updateTranslations() {
    const translations = this.languageService.getTranslationData();
    this.contactMeTrad = translations.contactMeTrad; 
    // Obtiene datos de traducción para 'basicData'
  }
  public sendEmail() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    emailjs
      .sendForm('service_9uqug2d', 'template_tb5aua5', this.contactForm.value, {
        publicKey: 'Z0a_KCtP-5SrX6STS',
      })
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent.',
          });
          this.contactForm.reset();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
      
  }

}
