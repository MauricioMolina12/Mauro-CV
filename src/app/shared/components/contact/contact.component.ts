import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
})
export class ContactComponent {
  form: FormGroup;
  loading = false;

  toast: { show: boolean; type: 'success' | 'error'; message: string } = {
    show: false,
    type: 'success',
    message: '',
  };

  private toastTimer: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.showToast('error', 'Por favor completa todos los campos requeridos.');
      return;
    }

    this.loading = true;

    emailjs
      .send(
        'service_sygd4sk',
        'template_fqa1z3k',
        this.form.value,
        'VPj63xUtAafjdJ2s5'
      )
      .then(() => {
        this.form.reset();
        this.showToast('success', '¡Mensaje enviado! Te responderé muy pronto.');
      })
      .catch(() => {
        this.showToast(
          'error',
          'Ocurrió un error al enviar el mensaje. Intenta más tarde.'
        );
      })
      .finally(() => {
        this.loading = false;
      });
  }

  private showToast(type: 'success' | 'error', message: string): void {
    this.toast = { show: true, type, message };
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => (this.toast.show = false), 4500);
  }
}
